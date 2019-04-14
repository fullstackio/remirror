declare module 'refractor' {
  import refractor = require('refractor/core');
  export = refractor;
}

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

declare module 'refractor/lang/abap' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/abnf' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/actionscript' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/ada' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/apacheconf' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/apl' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/applescript' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/arduino' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/arff' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/asciidoc' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/asm6502' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/aspnet' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/autohotkey' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/autoit' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/bash' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/basic' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/batch' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/bison' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/bnf' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/brainfuck' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/bro' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/c' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/cil' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/clike' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/clojure' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/cmake' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/coffeescript' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/cpp' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/crystal' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/csharp' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/csp' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/css-extras' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/css' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/d' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/dart' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/diff' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/django' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/docker' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/ebnf' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/eiffel' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/ejs' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/elixir' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/elm' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/erb' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/erlang' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/flow' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/fortran' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/fsharp' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/gcode' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/gedcom' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/gherkin' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/git' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/glsl' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/gml' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/go' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/graphql' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/groovy' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/haml' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/handlebars' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/haskell' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/haxe' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/hcl' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/hpkp' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/hsts' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/http' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/ichigojam' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/icon' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/inform7' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/ini' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/io' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/j' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/java' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/javadoc' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/javadoclike' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/javascript' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/javastacktrace' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/jolie' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/js-extras' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/jsdoc' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/json' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/json5' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/jsonp' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/jsx' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/julia' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/keyman' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/kotlin' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/latex' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/less' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/liquid' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/lisp' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/livescript' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/lolcode' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/lua' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/makefile' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/markdown' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/markup-templating' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/markup' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/matlab' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/mel' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/mizar' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/monkey' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/n1ql' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/n4js' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/nand2tetris-hdl' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/nasm' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/nginx' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/nim' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/nix' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/nsis' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/objectivec' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/ocaml' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/opencl' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/oz' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/parigp' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/parser' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/pascal' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/perl' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/php-extras' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/php' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/phpdoc' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/plsql' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/powershell' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/processing' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/prolog' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/properties' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/protobuf' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/pug' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/puppet' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/pure' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/python' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/q' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/qore' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/r' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/reason' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/regex' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/renpy' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/rest' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/rip' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/roboconf' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/ruby' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/rust' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/sas' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/sass' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/scala' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/scheme' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/scss' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/smalltalk' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/smarty' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/soy' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/sql' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/stylus' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/swift' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/t4-cs' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/t4-templating' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/t4-vb' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/tap' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/tcl' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/textile' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/toml' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/tsx' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/tt2' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/twig' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/typescript' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/vala' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/vbnet' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/velocity' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/verilog' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/vhdl' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/vim' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/visual-basic' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/wasm' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/wiki' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/xeora' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/xojo' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/xquery' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}

declare module 'refractor/lang/yaml' {
  import { RefractorSyntax } from 'refractor/core';
  const lang: RefractorSyntax;
  export = lang;
}
