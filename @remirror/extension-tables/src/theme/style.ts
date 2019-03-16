import { TableClassNames } from '../constants';
import { TableLayout } from '../types';
import { DN50, DN70, N20, N50 } from './colors';

export const akEditorTableBorder = N50;
export const akEditorTableBorderDark = DN70;
export const akEditorTableToolbar = N20;
export const akEditorTableToolbarDark = DN50;

export const akEditorWideLayoutWidth = 960;
export const akEditorFullWidthLayoutWidth = 1800;
export const akEditorTableNumberColumnWidth = 42;
export const akEditorBreakoutPadding = 96;
export const TABLE_MARGIN_TOP = 24;
export const TABLE_MARGIN_BOTTOM = 16;
export const TABLE_MARGIN_SIDES = 8;
export const TABLE_CELL_MIN_WIDTH = 48;
export const TABLE_NEW_COLUMN_WIDTH = 140;
export const TABLE_CELL_BORDER_WIDTH = 1;

export const defaultStyles = `
  .${TableClassNames.TABLE_CONTAINER} {
    position: relative;
    margin: 0 auto ${TABLE_MARGIN_BOTTOM}px;
    box-sizing: border-box;

    /**
     * Fix block top alignment inside table cells.
     */
    .code-block,
    .taskItemView-content-wrap > div,
    .decisionItemView-content-wrap > div {
      margin-top: 0;
    }
  }
  .${TableClassNames.TABLE_CONTAINER}[data-number-column='true'] {
    padding-left: ${akEditorTableNumberColumnWidth - 1}px;
  }
  /* avoid applying styles to nested tables (possible via extensions) */
  .${TableClassNames.TABLE_CONTAINER} > table,
  .${TableClassNames.TABLE_NODE_WRAPPER} > table {
    border-collapse: collapse;
    margin: ${TABLE_MARGIN_TOP}px ${TABLE_MARGIN_SIDES}px 0;
    border: ${TABLE_CELL_BORDER_WIDTH}px solid ${N50};
    table-layout: fixed;
    font-size: ${14}px;
    width: 100%;

    &[data-autosize='true'] {
      table-layout: auto;
    }

    & {
      * {
        box-sizing: border-box;
      }

      tbody {
        border-bottom: none;
      }
      th td {
        background-color: white;
        font-weight: normal;
      }
      th,
      td {
        min-width: ${TABLE_CELL_MIN_WIDTH}px;
        height: 3em;
        vertical-align: top;
        border: 1px solid ${N50};
        border-right-width: 0;
        border-bottom-width: 0;
        padding: 10px;
        /* https://stackoverflow.com/questions/7517127/borders-not-shown-in-firefox-with-border-collapse-on-table-position-relative-o */
        background-clip: padding-box;

        th p:not(:first-of-type),
        td p:not(:first-of-type) {
          margin-top: 12px;
        }
      }
      th {
        background-color: ${N20};
        text-align: left;
        & *:not(strong) {
          font-weight: normal;
        }
        & .${TableClassNames.TABLE_CELL_NODEVIEW_CONTENT_DOM} > p {
          font-weight: bold;
        }
      }
    }
  }
`;

export const calcTableWidth = (
  layout: TableLayout,
  containerWidth?: number,
  addControllerPadding: boolean = true,
): string => {
  switch (layout) {
    case 'full-width':
      return containerWidth
        ? `${Math.min(
            containerWidth - (addControllerPadding ? akEditorBreakoutPadding : 0),
            akEditorFullWidthLayoutWidth,
          )}px`
        : `${akEditorFullWidthLayoutWidth}px`;
    case 'wide':
      if (containerWidth) {
        return `${Math.min(
          containerWidth - (addControllerPadding ? akEditorBreakoutPadding : 0),
          akEditorWideLayoutWidth,
        )}px`;
      }

      return `${akEditorWideLayoutWidth}px`;
    default:
      return 'inherit';
  }
};
