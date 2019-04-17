declare module 'react-dock' {
  import { Component, CSSProperties } from '../@types/react-dock/node_modules/react';

  export type Position = 'left' | 'right' | 'top' | 'bottom';

  export interface ReactDockInjectedProps {
    position: Position;
    isResizing: boolean;
    size: number;
    isVisible: boolean;
  }

  type InjectedRenderFunc = (props: ReactDockInjectedProps) => ReactNode;
  export interface ReactDockProps {
    /**
     * 	Side to dock
     * @default 'left'.
     */
    position?: Position;
    /**
     * 	If true, resize dock proportionally on window resize.
     * @default true
     */
    fluid?: boolean;
    /**
     * 	Size of dock panel (width or height, depending on position). If this prop is set, Dock is considered as a controlled component, so you need to use onSizeChange to track dock resizing.
     * Value is a fraction of window width/height, if fluid is true, or pixels otherwise
     */
    size?: number;
    /**
     * 	Default size of dock panel (used for uncontrolled Dock component)
     * @default 0.3
     */
    defaultSize?: number;
    /**
     * 	If true, dock is visible
     */
    isVisible?: boolean;
    /**
     * 	If none - content is not dimmed, if transparent - pointer events are disabled (so you can click through it), if opaque - click on dim area closes the dock. Default is opaque
     */
    dimMode?: 'none' | 'transparent' | 'opaque';
    /**
     * 	Animation duration. Should be synced with transition animation in style properties
     */
    duration?: number;
    /**
     * 	Style for dim area
     */
    dimStyle?: CSSProperties;
    /**
     * 	Style for dock
     */
    dockStyle?: CSSProperties;
    /**
     * 	Z-index for wrapper
     * @default 99999999
     */
    zIndex?: number;
    /**
     * 	Fires when Dock wants to change isVisible (when opaque dim is clicked, in particular)
     */
    onVisibleChange?: (visible: boolean) => void;
    /**
     * 	Fires when Dock wants to change size
     */
    onSizeChange?: (size: number) => void;
    /**
     * 	Dock content - react elements or function that returns an element. Function receives an object with these state values: { position, isResizing, size, isVisible }
     */
    children?: ReactNode | InjectedRenderFunc;
  }

  export default class ReactDock extends Component<ReactDockProps> {}
}

declare module 'github-reserved-names' {
  export function check(name: string): boolean;
}
