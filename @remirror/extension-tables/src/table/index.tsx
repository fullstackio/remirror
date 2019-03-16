import { table, tableCell, tableHeader, tableRow } from '@atlaskit/adf-schema';
import { tableCellMinWidth } from '@atlaskit/editor-common';
import TableIcon from '@atlaskit/icon/glyph/editor/table';
import { tableEditing } from 'prosemirror-tables';
import { createTable } from 'prosemirror-utils';
import * as React from 'react';

import { EditorPlugin } from '../../types';
import WithPluginState from '../../ui/WithPluginState';
import {
  ACTION,
  ACTION_SUBJECT,
  ACTION_SUBJECT_ID,
  addAnalytics,
  EVENT_TYPE,
  INPUT_METHOD,
} from '../analytics';
import { messages } from '../insert-block/ui/ToolbarInsertBlock';
import { getToolbarConfig } from '../toolbar';
import { PermittedLayoutsDescriptor, PluginConfig } from '../types';
import { ColumnResizingPlugin } from '../types';
import { keymapPlugin } from './plugins/keymap';
import { createPlugin, pluginKey } from './plugins/main';
import {
  createPlugin as createFlexiResizingPlugin,
  pluginKey as tableResizingPluginKey,
} from './plugins/table-resizing';
import FloatingContextualMenu from './ui/FloatingContextualMenu';
import LayoutButton from './ui/LayoutButton';
import { isLayoutSupported } from './utils';

export const HANDLE_WIDTH = 6;

export const pluginConfig = (tablesConfig?: PluginConfig | boolean) => {
  const config = !tablesConfig || typeof tablesConfig === 'boolean' ? {} : tablesConfig;
  return config.advanced
    ? {
        allowBackgroundColor: true,
        allowColumnResizing: true,
        allowHeaderColumn: true,
        allowHeaderRow: true,
        allowMergeCells: true,
        allowNumberColumn: true,
        stickToolbarToBottom: true,
        permittedLayouts: 'all' as PermittedLayoutsDescriptor,
        allowControls: true,
        ...config,
      }
    : config;
};

const tablesPlugin = (options?: PluginConfig | boolean): EditorPlugin => ({
  nodes() {
    return [
      { name: 'table', node: table },
      { name: 'tableHeader', node: tableHeader },
      { name: 'tableRow', node: tableRow },
      { name: 'tableCell', node: tableCell },
    ];
  },

  pmPlugins() {
    return [
      {
        name: 'table',
        plugin: ({
          props: { allowTables, appearance, allowDynamicTextSizing },
          eventDispatcher,
          dispatch,
          portalProviderAPI,
        }) => {
          return createPlugin(
            dispatch,
            portalProviderAPI,
            eventDispatcher,
            pluginConfig(allowTables),
            appearance,
            allowDynamicTextSizing,
          );
        },
      },
      {
        name: 'tablePMColResizing',
        plugin: ({ dispatch, props: { allowTables, allowDynamicTextSizing } }) => {
          const { allowColumnResizing } = pluginConfig(allowTables);
          return allowColumnResizing
            ? createFlexiResizingPlugin(dispatch, {
                handleWidth: HANDLE_WIDTH,
                cellMinWidth: tableCellMinWidth,
                dynamicTextSizing: allowDynamicTextSizing,
              } as ColumnResizingPlugin)
            : undefined;
        },
      },
      // Needs to be lower priority than prosemirror-tables.tableEditing
      // plugin as it is currently swallowing backspace events inside tables
      { name: 'tableKeymap', plugin: () => keymapPlugin() },
      { name: 'tableEditing', plugin: () => tableEditing() },
    ];
  },

  contentComponent({
    editorView,
    popupsMountPoint,
    popupsBoundariesElement,
    popupsScrollableElement,
    appearance,
  }) {
    return (
      <WithPluginState
        plugins={{
          pluginState: pluginKey,
          tableResizingPluginState: tableResizingPluginKey,
        }}
        render={({ pluginState, tableResizingPluginState }) => (
          <>
            <FloatingContextualMenu
              editorView={editorView}
              mountPoint={popupsMountPoint}
              boundariesElement={popupsBoundariesElement}
              targetCellPosition={pluginState.targetCellPosition}
              isOpen={pluginState.isContextualMenuOpen}
              pluginConfig={pluginState.pluginConfig}
            />
            {appearance === 'full-page' && isLayoutSupported(editorView.state) && (
              <LayoutButton
                editorView={editorView}
                mountPoint={popupsMountPoint}
                boundariesElement={popupsBoundariesElement}
                scrollableElement={popupsScrollableElement}
                targetRef={pluginState.tableFloatingToolbarTarget}
                isResizing={!!tableResizingPluginState && !!tableResizingPluginState.dragging}
              />
            )}
          </>
        )}
      />
    );
  },

  pluginsOptions: {
    quickInsert: ({ formatMessage }) => [
      {
        title: formatMessage(messages.table),
        priority: 600,
        icon: () => <TableIcon label={formatMessage(messages.table)} />,
        action(insert, state) {
          const tr = insert(createTable(state.schema));
          return addAnalytics(tr, {
            action: ACTION.INSERTED,
            actionSubject: ACTION_SUBJECT.DOCUMENT,
            actionSubjectId: ACTION_SUBJECT_ID.TABLE,
            attributes: { inputMethod: INPUT_METHOD.QUICK_INSERT },
            eventType: EVENT_TYPE.TRACK,
          });
        },
      },
    ],
    floatingToolbar: getToolbarConfig,
  },
});

export default tablesPlugin;
