declare module 'refractor/core' {
  import * as Prism from 'prismjs';

  namespace refractor {
    export interface RefractorSyntax {
      displayName: string;
      aliases: string[];
      (prism: typeof Prism): void;
    }

    namespace AST {
      namespace Unist {
        interface Node {
          type: string;
        }

        interface Parent extends Node {
          children: RefractorNode[];
        }

        interface Text extends Node {
          value: string;
        }
      }

      interface Properties {
        className?: string[];
        [key: string]: any;
      }

      interface Element extends Unist.Parent {
        type: 'element';
        tagName: string;
        properties: Properties;
      }

      interface Text extends Unist.Text {
        type: 'text';
      }
    }

    export type RefractorNode = AST.Element | AST.Text;

    export function register(syntax: RefractorSyntax): void;
    export function highlight(value: string, name: string): RefractorNode[];
    export function registered(name: string): boolean;
    export function listLanguages(): string[];
  }
  export = refractor;
}
