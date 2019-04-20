/**
 * An iframe placeholder injected into the dom.
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { TopBarButtons } from '@app/containers/github/topbar-buttons.component';
import { UserProfileButton } from '@app/containers/github/user-profile-button.component';
import { InjectedContentProps } from '@app/containers/types';
import { contentActions, selectDockVisibility } from '@app/redux/content';
import { RootState } from '@typings/redux';
import { GitHubPageType } from '@utils/page-detect';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps & InjectedContentProps;

export class GitHubPortalsContainer extends PureComponent<Props> {
  public showDock = () => {
    const { toggleDockVisibility, isDockVisible } = this.props;
    if (!isDockVisible) {
      toggleDockVisibility();
    }
  };

  private renderTopBarButtons() {
    if (this.props.pageType === GitHubPageType.Repo && this.props.elements.topBarRepo) {
      return <TopBarButtons {...this.props} showDock={this.showDock} />;
    }
    return null;
  }

  private renderUserProfileButton() {
    console.log('should I render', this.props.pageType, this.props.elements.userProfile);
    if (this.props.pageType === GitHubPageType.UserProfile && this.props.elements.userProfile) {
      console.log('about to render userprofile button');
      return <UserProfileButton {...this.props} showDock={this.showDock} />;
    }
    return null;
  }

  public render() {
    return (
      <>
        {this.renderTopBarButtons()}
        {this.renderUserProfileButton()}
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  isDockVisible: selectDockVisibility(state.content),
});

const dispatchProps = {
  toggleDockVisibility: contentActions.toggleDockVisibility,
};

export default connect(
  mapStateToProps,
  dispatchProps,
)(GitHubPortalsContainer);
