/**
 * An iframe placeholder injected into the dom.
 */
import React, { PureComponent, ReactNode } from 'react';
import Dock from 'react-dock';
import { connect } from 'react-redux';

import { InjectedContentProps } from '@app/containers/types';
import { contentActions, selectDockVisibility } from '@app/redux/content';
import { RootState } from '@typings/redux';
import GitHubPortalsContainer from './github/github-portals.container';

type ReduxProps = ReturnType<typeof mapStateToProps> & typeof dispatchProps;
type Props = InjectedContentProps & ReduxProps;
interface State {
  mounted: boolean;
}
export class ContentScriptContainer extends PureComponent<Props, State> {
  public state: State = { mounted: false };
  public renderGitHubPortals() {
    if (this.state.mounted) {
      return <GitHubPortalsContainer {...this.props} />;
    }
    return null;
  }

  public renderDock(): ReactNode {
    if (this.state.mounted) {
      return (
        <Dock position='right' dimMode='transparent' defaultSize={0.4} isVisible={this.props.isVisible}>
          <div>
            <h1>I am a dock</h1>
            <button onClick={this.props.toggleVisibility}>Close me</button>
          </div>
        </Dock>
      );
    }
    return null;
  }

  public componentDidMount() {
    this.setState({ mounted: true });
  }

  public render() {
    return (
      <>
        {this.renderGitHubPortals()}
        {this.renderDock()}
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  isVisible: selectDockVisibility(state.content),
});

const dispatchProps = {
  toggleVisibility: contentActions.toggleDockVisibility,
};

export default connect(
  mapStateToProps,
  dispatchProps,
)(ContentScriptContainer);
