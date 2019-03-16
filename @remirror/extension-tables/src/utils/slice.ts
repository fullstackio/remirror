import { ProsemirrorNode } from '@remirror/core';
import { Fragment, Slice } from 'prosemirror-model';

/**
 * A helper to get the underlying array of a fragment.
 */
export function getFragmentBackingArray(fragment: Fragment): ReadonlyArray<ProsemirrorNode> {
  return (fragment as any).content as ProsemirrorNode[];
}

export function mapFragment(
  content: Fragment,
  callback: (
    node: ProsemirrorNode,
    parent: ProsemirrorNode | null,
    index: number,
  ) => ProsemirrorNode | ProsemirrorNode[] | Fragment | null,
  parent: ProsemirrorNode | null = null,
) {
  const children = [] as ProsemirrorNode[];
  for (let i = 0, size = content.childCount; i < size; i++) {
    const node = content.child(i);
    const transformed = node.isLeaf
      ? callback(node, parent, i)
      : callback(node.copy(mapFragment(node.content, callback, node)), parent, i);
    if (transformed) {
      if (transformed instanceof Fragment) {
        children.push(...getFragmentBackingArray(transformed));
      } else if (Array.isArray(transformed)) {
        children.push(...transformed);
      } else {
        children.push(transformed);
      }
    }
  }
  return Fragment.fromArray(children);
}

export function mapSlice(
  slice: Slice,
  callback: (
    nodes: ProsemirrorNode,
    parent: ProsemirrorNode | null,
    index: number,
  ) => ProsemirrorNode | ProsemirrorNode[] | Fragment | null,
): Slice {
  const fragment = mapFragment(slice.content, callback);
  return new Slice(fragment, slice.openStart, slice.openEnd);
}

export type FlatMapCallback = (
  node: ProsemirrorNode,
  index: number,
  fragment: Fragment,
) => ProsemirrorNode | ProsemirrorNode[];

export function flatMap(fragment: Fragment, callback: FlatMapCallback): Fragment {
  const fragmentContent = [] as ProsemirrorNode[];
  for (let i = 0; i < fragment.childCount; i++) {
    const child = callback(fragment.child(i), i, fragment);
    if (Array.isArray(child)) {
      fragmentContent.push(...child);
    } else {
      fragmentContent.push(child);
    }
  }
  return Fragment.fromArray(fragmentContent);
}

export type MapWithCallback<T> = (node: ProsemirrorNode, index: number, fragment: Fragment) => T;

export function mapChildren<T>(node: ProsemirrorNode, callback: MapWithCallback<T>): T[] {
  const array: T[] = [];
  for (let i = 0; i < node.childCount; i++) {
    array.push(callback(node.child(i), i, node.content));
  }

  return array;
}
