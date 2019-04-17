/**
 * Scripts injected into the running website.
 */
import domLoaded from 'dom-loaded';
import elementReady from 'element-ready';
import { ContentDOM } from './app/content/content.dom';
import { gitHubInjection } from './utils/github-injection';
import * as pageDetect from './utils/page-detect';

/**
 * Automatically stops checking for an element to appear once the DOM is ready.
 */
const safeElementReady = async (selector: string) => {
  const waiting = elementReady(selector);

  // Don't check ad-infinitum
  domLoaded.then(() => requestAnimationFrame(() => waiting.cancel())).catch();

  // If cancelled, return null like a regular select() would
  return waiting.catch(() => null);
};

const loggedInCheck = () => {
  if (document.body.classList.contains('logged-out')) {
    console.warn('%remirror%c works best when you’re logged in to GitHub.', 'font-weight: bold', '');
    return;
  }
};

async function init() {
  await safeElementReady('body');
  loggedInCheck();
  await domLoaded;
  const props = { pageType: pageDetect.getPageType() };
  const contentDom = new ContentDOM(props); // Sets the dom up
  gitHubInjection((firstRun: boolean) => {
    // First run do nothing new as react handles the first render.
    if (firstRun) {
      return;
    }
    // Only update when node was removed
    contentDom.reset();
  });
}

init().catch(e => {
  console.log('There was a problem initializing the content scripts', e);
});
document.createDocumentFragment();
