import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty, isLoaded } from 'react-redux-firebase';

import { configureProxyStore } from '@app/store/configure-proxy-store';
import { AliasType } from '@typings/enums';

const proxyStore = configureProxyStore();

interface Props {
  auth: any;
}

class App extends Component<Props> {
  private loginWithGithub = () => {
    proxyStore.dispatch({ type: AliasType.LOGIN_WITH_GITHUB });
  };

  private logout = () => {
    proxyStore.dispatch({ type: AliasType.LOGOUT });
  };

  public renderContent() {
    const { auth } = this.props;
    console.log('rendering content', auth);
    if (!isLoaded(auth)) {
      return <h1>This should not be the case</h1>;
    } else if (isEmpty(auth)) {
      return <button onClick={this.loginWithGithub}>Login Via GitHub</button>;
    } else {
      return (
        <>
          <h1>Welcome to the app {auth.displayName}</h1>
          <button onClick={this.logout}>Logout</button>
        </>
      );
    }
  }

  public render() {
    console.log(this.props);
    return <div style={{ height: 500, padding: 20 }}>{this.renderContent()}</div>;
  }
}

const mapStateToProps = (state: any) => ({
  auth: state.firebase.auth,
});

export default connect(mapStateToProps)(App);
