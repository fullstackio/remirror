// import Firebase from 'firebase';
import { Browser } from 'webextension-polyfill-ts';
import { EnhancedStore } from './typings/redux';

declare global {
  const browser: Browser;
  const store: EnhancedStore;
  // declare const firebase: Firebase;

  interface Window {
    browser: Browser;
    store: EnhancedStore;
    // firebase: Firebase;
  }
}
