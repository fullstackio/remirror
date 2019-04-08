import {
  CompareStateParams,
  EditorState,
  findChildrenByNode,
  FromToParams,
  NodeExtension,
  NodeType,
  NodeTypeParams,
  NodeWithPosition,
  PMNodeParams,
  PositionParams,
  PosParams,
  Transaction,
  TransactionParams,
} from '@remirror/core';
import { DecorationSet } from 'prosemirror-view';
import { CodeBlockOptions } from './types';
import { createDecorations } from './utils';

export class CodeBlockState {
  public decorationSet!: DecorationSet;

  constructor(private extension: NodeExtension<CodeBlockOptions>, private type: NodeType) {}

  /**
   * Creates the initial set of decorations
   */
  public init(state: EditorState) {
    const blocks = findChildrenByNode({ node: state.doc, type: this.type });
    const decorations = createDecorations(blocks);

    this.decorationSet = DecorationSet.create(state.doc, decorations);

    return this;
  }

  /**
   * Apply the state and update decorations when something has changed.
   */
  public apply({ tr, prevState, newState }: ApplyParams) {
    if (!tr.docChanged) {
      return this;
    }

    this.decorationSet = this.decorationSet.map(tr.mapping, tr.doc);

    const current = getNodeInformationFromState(newState);
    const previous = getNodeInformationFromState(prevState);

    this.manageDecorationSet({ current, previous, tr });

    return this;
  }

  /**
   * Removes all decorations which relate to the changed block node before creating new decorations
   * and adding them to the decorationSet.
   */
  private updateDecorationSet({ nodeInfo: { from, to, node, pos }, tr }: UpdateDecorationSetParams) {
    const decorationSet = this.decorationSet.remove(this.decorationSet.find(from, to));

    this.decorationSet = decorationSet.add(tr.doc, createDecorations([{ node, pos }]));
  }

  private manageDecorationSet({ previous, current, tr }: ManageDecorationSetParams) {
    if (tr.docChanged) {
      if (current.type === this.type) {
        this.updateDecorationSet({ nodeInfo: current, tr });
      }
      if (previous.type === this.type && !previous.node.eq(current.node)) {
        this.updateDecorationSet({ nodeInfo: previous, tr });
      }
    }
  }
}

interface ApplyParams extends TransactionParams, CompareStateParams {}
interface ManageDecorationSetParams extends TransactionParams {
  previous: NodeInformation;
  current: NodeInformation;
}

interface UpdateDecorationSetParams extends TransactionParams {
  nodeInfo: NodeInformation;
}
interface NodeInformation extends NodeTypeParams, FromToParams, PMNodeParams, PosParams {}

const getNodeInformationFromState = (state: EditorState): NodeInformation => {
  const { $head } = state.selection;
  const depth = $head.depth;
  const from = $head.start(depth);
  const to = $head.end(depth);
  const node = $head.parent;
  const type = node.type;
  const pos = depth > 0 ? $head.before(depth) : 0;
  return {
    from,
    to,
    type,
    node,
    pos,
  };
};
