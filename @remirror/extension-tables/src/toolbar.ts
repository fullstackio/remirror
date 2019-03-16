import RemoveIcon from '@atlaskit/icon/glyph/editor/remove';
import { defineMessages } from 'react-intl';

import { AnalyticsProperties, analyticsService as analytics } from '../../analytics';
import commonMessages from '../../messages';
import { Command } from '../../types';
import { FloatingToolbarHandler } from '../floating-toolbar/types';
import {
  clearHoverSelection,
  deleteTable,
  hoverTable,
  toggleHeaderColumn,
  toggleHeaderRow,
  toggleNumberColumn,
} from './actions';
import { pluginKey } from './plugins/main';
import { pluginKey as tableResizingPluginKey, ResizeState } from './plugins/table-resizing/index';
import { TablePluginState } from './types';
import { checkIfHeaderColumnEnabled, checkIfHeaderRowEnabled, checkIfNumberColumnEnabled } from './utils';

export const messages = defineMessages({
  tableOptions: {
    id: 'fabric.editor.tableOptions',
    defaultMessage: 'Table options',
    description: 'Opens a menu with additional table options',
  },
  headerRow: {
    id: 'fabric.editor.headerRow',
    defaultMessage: 'Header row',
    description: 'Marks the first table row as a header row',
  },
  headerColumn: {
    id: 'fabric.editor.headerColumn',
    defaultMessage: 'Header column',
    description: 'Marks the first table column as a header row',
  },
  numberedColumn: {
    id: 'fabric.editor.numberedColumn',
    defaultMessage: 'Numbered column',
    description: 'Adds an auto-numbering column to your table',
  },
});

const withAnalytics = (command: Command, eventName: string, properties?: AnalyticsProperties): Command => (
  state,
  dispatch,
) => {
  analytics.trackEvent(eventName, properties);
  return command(state, dispatch);
};

export const getToolbarConfig: FloatingToolbarHandler = (state, { formatMessage }) => {
  const tableState: TablePluginState | undefined = pluginKey.getState(state);
  const resizeState: ResizeState | undefined = tableResizingPluginKey.getState(state);
  if (tableState && tableState.tableRef && tableState.tableNode && tableState.pluginConfig) {
    const { pluginConfig } = tableState;
    return {
      title: 'Table floating controls',
      getDomRef: () => tableState.tableFloatingToolbarTarget!,
      nodeType: state.schema.nodes.table,
      items: [
        {
          type: 'dropdown',
          title: formatMessage(messages.tableOptions),
          hidden: !(pluginConfig.allowHeaderRow && pluginConfig.allowHeaderColumn),
          options: [
            {
              title: formatMessage(messages.headerRow),
              onClick: withAnalytics(toggleHeaderRow, 'atlassian.editor.format.table.toggleHeaderRow.button'),
              selected: checkIfHeaderRowEnabled(state),
              hidden: !pluginConfig.allowHeaderRow,
            },
            {
              title: formatMessage(messages.headerColumn),
              onClick: withAnalytics(
                toggleHeaderColumn,
                'atlassian.editor.format.table.toggleHeaderColumn.button',
              ),
              selected: checkIfHeaderColumnEnabled(state),
              hidden: !pluginConfig.allowHeaderColumn,
            },
            {
              title: formatMessage(messages.numberedColumn),
              onClick: withAnalytics(
                toggleNumberColumn,
                'atlassian.editor.format.table.toggleNumberColumn.button',
              ),
              selected: checkIfNumberColumnEnabled(state),
              hidden: !pluginConfig.allowNumberColumn,
            },
          ],
        },
        {
          type: 'separator',
          hidden: !(
            pluginConfig.allowBackgroundColor &&
            pluginConfig.allowHeaderRow &&
            pluginConfig.allowHeaderColumn &&
            pluginConfig.allowMergeCells
          ),
        },
        {
          type: 'button',
          appearance: 'danger',
          icon: RemoveIcon,
          onClick: deleteTable,
          disabled: !!resizeState && !!resizeState.dragging,
          onMouseEnter: hoverTable(true),
          onMouseLeave: clearHoverSelection,
          title: formatMessage(commonMessages.remove),
        },
      ],
    };
  }
};
