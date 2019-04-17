import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';

import { InjectedGitHubButton } from '@app/components/github/github-button.component';
import { CoffeeActiveIcon, CoffeeOutlineIcon } from '@app/components/svg-icons.component';
import { InjectedContentProps } from '@app/containers/types';
import { configureProxyStore } from '@app/store/configure-proxy-store';
import { AliasType } from '@typings/enums';
import { createInjectedElement } from '@utils/github-injection';

const proxyStore = configureProxyStore();

interface State {
  pledged: boolean;
  pledges: number;
  tipped: boolean;
  tips: number;
  element: Element;
}

interface Props extends InjectedContentProps {
  showDock: () => void;
}

export class TopBarButtons extends PureComponent<Props, State> {
  public state: State = {
    pledged: false,
    pledges: 0,
    tipped: false,
    tips: 0,
    element: createInjectedElement('li'),
  };

  private container: Element | null;

  constructor(props: Props) {
    super(props);
    this.container = this.props.elements.topBarRepo;
  }

  public componentDidMount() {
    if (this.container) {
      this.insertContainerIntoDom(this.container);
    }
  }

  public insertContainerIntoDom(container: Element) {
    container.parentElement!.appendChild(this.state.element);
  }

  public componentDidUpdate(prevProps: InjectedContentProps) {
    const { topBarRepo } = this.props.elements;
    if (prevProps.elements.topBarRepo !== topBarRepo) {
      if (topBarRepo) {
        this.recreateFragment(topBarRepo);
      }
    }
  }

  private recreateFragment(newContainer: Element) {
    this.container = newContainer;
    const element = createInjectedElement('li');
    this.setState({ element }, () => {
      this.insertContainerIntoDom(newContainer);
    });
  }

  private onClick = () => {
    console.log('clicking pledge');
    proxyStore.dispatch({ type: AliasType.MAKE_PLEDGE });
    this.setState(prevState => ({
      pledged: !prevState.pledged,
      pledges: prevState.pledged ? prevState.pledges - 1 : prevState.pledges + 1,
    }));
  };

  private onClickPledgeInteractions = () => {
    proxyStore.dispatch({ type: AliasType.DISPLAY_PLEDGE_COUNT });
    this.props.showDock();
  };

  private onClickTips = () => {
    proxyStore.dispatch({ type: AliasType.MAKE_TIP });
    this.setState(prevState => ({
      tipped: !prevState.tipped,
      tips: prevState.tipped ? prevState.tips - 1 : prevState.tips + 1,
    }));
  };

  private onClickTipInteractions = () => {
    proxyStore.dispatch({ type: AliasType.DISPLAY_TIPS_COUNT });
    this.props.showDock();
  };

  public renderChildren() {
    const { pledged, pledges, tipped, tips } = this.state;
    return (
      <>
        <InjectedGitHubButton
          onClick={this.onClick}
          label={pledged ? 'Remove Pledge' : 'Pledge'}
          labelDescription={`${
            pledged ? 'Send' : 'Remove'
          } pledge at the end of the month`}
          interactions={pledges}
          onClickInteractions={this.onClickPledgeInteractions}
          interactionsDescription={`${pledges} ${
            pledges <= 0 || pledges > 1 ? 'pledges' : 'pledge'
          }`}
          extraButtonClasses="btn-primary"
        />
        <InjectedGitHubButton
          onClick={this.onClickTips}
          label={tipped ? 'Remove Tip' : 'Tip'}
          labelDescription={`${tipped ? 'Tip' : 'Remove tip'} REPO_NAME`}
          icon={tipped ? <CoffeeActiveIcon /> : <CoffeeOutlineIcon />}
          interactions={tips}
          onClickInteractions={this.onClickTipInteractions}
          interactionsDescription={`${tips} ${tips <= 0 || tips > 1 ? 'tips' : 'tip'}`}
        />
      </>
    );
  }

  public render() {
    return createPortal(this.renderChildren(), this.state.element as any);
  }
}
