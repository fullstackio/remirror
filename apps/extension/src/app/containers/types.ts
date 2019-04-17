import { GitHubPageType } from '@utils/page-detect';
export interface InjectedContentProps {
  elements: ElementsObject;
  pageType: GitHubPageType;
}

export interface ElementsObject {
  topBarRepo: Element | null;
  userProfile: Element | null;
  [key: string]: Element | null;
}
