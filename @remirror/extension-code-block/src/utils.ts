import { flattenArray, FromToParams, NodeWithPosition } from '@remirror/core';
import { Decoration } from 'prosemirror-view';
import refractor, { RefractorNode } from 'refractor/core';

interface ParsedRefractorNode {
  /**
   * The text to be wrapped
   */
  text: string;

  /**
   * The classes that will wrap the node
   */
  classes: string[];
}

interface PositionedRefractorNode extends FromToParams, ParsedRefractorNode {}

/**
 * Maps the refractor nodes into text and classes which will be used to create our decoration.
 */
function parseRefractorNodes(
  refractorNodes: RefractorNode[],
  className: string[] = [],
): ParsedRefractorNode[][] {
  return refractorNodes.map(node => {
    const classes = [
      ...className,
      ...(node.type === 'element' && node.properties.className ? node.properties.className : []),
    ];

    if (node.type === 'element') {
      return parseRefractorNodes(node.children, classes) as any;
    }

    return {
      text: node.value,
      classes,
    };
  });
}

/**
 * Creates a decoration set for the provides blocks
 */
export function createDecorations(blocks: NodeWithPosition[]) {
  const decorations: Decoration[] = [];

  blocks.forEach(block => {
    const positionedRefractorNodes = getPositionedRefractorNodes(block);

    positionedRefractorNodes.forEach(positionedRefractorNode => {
      const decoration = Decoration.inline(positionedRefractorNode.from, positionedRefractorNode.to, {
        class: positionedRefractorNode.classes.join(' '),
      });
      decorations.push(decoration);
    });
  });

  return decorations;
}

const mapToPositionedRefractorNodeFactory = (startPos: number) => (
  refractorNode: ParsedRefractorNode,
): PositionedRefractorNode => {
  const from = startPos;
  const to = from + refractorNode.text.length;
  startPos = to;
  return {
    ...refractorNode,
    from,
    to,
  };
};

const getPositionedRefractorNodes = (positionedNodes: NodeWithPosition) => {
  const startPos = positionedNodes.pos + 1;
  const refractorNodes = refractor.highlight(
    positionedNodes.node.textContent,
    positionedNodes.node.attrs.language,
  );

  return flattenArray<ParsedRefractorNode>(parseRefractorNodes(refractorNodes)).map(
    mapToPositionedRefractorNodeFactory(startPos),
  );
};

export const sortBlocks = (positionedNodes: NodeWithPosition[]) =>
  positionedNodes.sort((a, b) => a.pos - b.pos);
