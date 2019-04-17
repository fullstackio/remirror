import firebase from 'firebase/app';
import { configureStore } from './app/store/configure-store';
import { initializeFirebase } from './utils/firebase';

initializeFirebase();

browser.runtime.onInstalled.addListener(async ({ reason }) => {
  console.log('Extension installed', reason);
  if (reason === 'install') {
    const { installType } = await browser.management.getSelf();
    if (installType === 'development') {
      return;
    }
    browser.tabs
      .create({
        url: 'https://remirror.io/extension',
        active: false,
      })
      .catch();
  }
});
const store = configureStore();

console.log(store.getState(), store);

firebase.auth().onAuthStateChanged((...args) => {
  console.log('auth state changed', args);
  console.log(store.getState());
});
