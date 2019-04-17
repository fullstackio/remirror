/**
 * Scripts for the popup html
 */
import domLoaded from 'dom-loaded';
import { render } from 'react-dom';

import PopupContainer from './app/containers/popup.container';

import { configureProxyStore } from './app/store/configure-proxy-store';
import { injectStore } from './utils/inject-store';

const store = configureProxyStore();

async function main() {
  await domLoaded;
  await store.ready();
  render(injectStore(PopupContainer, {}), document.querySelector('#root'));
}

main().catch(e => {
  console.log('There was a problem launching the extension', e);
});
