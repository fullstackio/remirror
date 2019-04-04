declare module 'refractor/core' {
  import Prism from 'prismjs';

  export interface RefractorSyntax {
    displayName: string;
    aliases: string[];
    (prism: Prism): void;
  }

  export interface Refractor {
    register(syntax: RefractorSyntax): void;
    highlight(value: string, name: string): string;
    registered(name: string): boolean;
    listLanguages(): string[];
  }

  const refractor: Refractor;
  export = refractor;
}

declare module 'refractor' {
  import refractor = require('refractor/core');
  export = refractor;
}

declare module 'refractor/lang/abap' {
  import { RefractorSyntax } from 'refractor/core';
  const abap: RefractorSyntax;
  export = abap;
}

declare module 'refractor/lang/abnf' {
  import { RefractorSyntax } from 'refractor/core';
  const abnf: RefractorSyntax;
  export = abnf;
}

declare module 'refractor/lang/actionscript' {
  import { RefractorSyntax } from 'refractor/core';
  const actionscript: RefractorSyntax;
  export = actionscript;
}

declare module 'refractor/lang/ada' {
  import { RefractorSyntax } from 'refractor/core';
  const ada: RefractorSyntax;
  export = ada;
}

declare module 'refractor/lang/apacheconf' {
  import { RefractorSyntax } from 'refractor/core';
  const apacheconf: RefractorSyntax;
  export = apacheconf;
}

declare module 'refractor/lang/apl' {
  import { RefractorSyntax } from 'refractor/core';
  const apl: RefractorSyntax;
  export = apl;
}

declare module 'refractor/lang/applescript' {
  import { RefractorSyntax } from 'refractor/core';
  const applescript: RefractorSyntax;
  export = applescript;
}

declare module 'refractor/lang/arduino' {
  import { RefractorSyntax } from 'refractor/core';
  const arduino: RefractorSyntax;
  export = arduino;
}

declare module 'refractor/lang/arff' {
  import { RefractorSyntax } from 'refractor/core';
  const arff: RefractorSyntax;
  export = arff;
}

declare module 'refractor/lang/asciidoc' {
  import { RefractorSyntax } from 'refractor/core';
  const asciidoc: RefractorSyntax;
  export = asciidoc;
}

declare module 'refractor/lang/asm6502' {
  import { RefractorSyntax } from 'refractor/core';
  const asm6502: RefractorSyntax;
  export = asm6502;
}

declare module 'refractor/lang/aspnet' {
  import { RefractorSyntax } from 'refractor/core';
  const aspnet: RefractorSyntax;
  export = aspnet;
}

declare module 'refractor/lang/autohotkey' {
  import { RefractorSyntax } from 'refractor/core';
  const autohotkey: RefractorSyntax;
  export = autohotkey;
}

declare module 'refractor/lang/autoit' {
  import { RefractorSyntax } from 'refractor/core';
  const autoit: RefractorSyntax;
  export = autoit;
}

declare module 'refractor/lang/bash' {
  import { RefractorSyntax } from 'refractor/core';
  const bash: RefractorSyntax;
  export = bash;
}

declare module 'refractor/lang/basic' {
  import { RefractorSyntax } from 'refractor/core';
  const basic: RefractorSyntax;
  export = basic;
}

declare module 'refractor/lang/batch' {
  import { RefractorSyntax } from 'refractor/core';
  const batch: RefractorSyntax;
  export = batch;
}

declare module 'refractor/lang/bison' {
  import { RefractorSyntax } from 'refractor/core';
  const bison: RefractorSyntax;
  export = bison;
}

declare module 'refractor/lang/bnf' {
  import { RefractorSyntax } from 'refractor/core';
  const bnf: RefractorSyntax;
  export = bnf;
}

declare module 'refractor/lang/brainfuck' {
  import { RefractorSyntax } from 'refractor/core';
  const brainfuck: RefractorSyntax;
  export = brainfuck;
}

declare module 'refractor/lang/bro' {
  import { RefractorSyntax } from 'refractor/core';
  const bro: RefractorSyntax;
  export = bro;
}

declare module 'refractor/lang/c' {
  import { RefractorSyntax } from 'refractor/core';
  const c: RefractorSyntax;
  export = c;
}

declare module 'refractor/lang/cil' {
  import { RefractorSyntax } from 'refractor/core';
  const cil: RefractorSyntax;
  export = cil;
}

declare module 'refractor/lang/clike' {
  import { RefractorSyntax } from 'refractor/core';
  const clike: RefractorSyntax;
  export = clike;
}

declare module 'refractor/lang/clojure' {
  import { RefractorSyntax } from 'refractor/core';
  const clojure: RefractorSyntax;
  export = clojure;
}

declare module 'refractor/lang/cmake' {
  import { RefractorSyntax } from 'refractor/core';
  const cmake: RefractorSyntax;
  export = cmake;
}

declare module 'refractor/lang/coffeescript' {
  import { RefractorSyntax } from 'refractor/core';
  const coffeescript: RefractorSyntax;
  export = coffeescript;
}

declare module 'refractor/lang/cpp' {
  import { RefractorSyntax } from 'refractor/core';
  const cpp: RefractorSyntax;
  export = cpp;
}

declare module 'refractor/lang/crystal' {
  import { RefractorSyntax } from 'refractor/core';
  const crystal: RefractorSyntax;
  export = crystal;
}

declare module 'refractor/lang/csharp' {
  import { RefractorSyntax } from 'refractor/core';
  const csharp: RefractorSyntax;
  export = csharp;
}

declare module 'refractor/lang/csp' {
  import { RefractorSyntax } from 'refractor/core';
  const csp: RefractorSyntax;
  export = csp;
}

declare module 'refractor/lang/css-extras' {
  import { RefractorSyntax } from 'refractor/core';
  const cssExtras: RefractorSyntax;
  export = cssExtras;
}

declare module 'refractor/lang/css' {
  import { RefractorSyntax } from 'refractor/core';
  const css: RefractorSyntax;
  export = css;
}

declare module 'refractor/lang/d' {
  import { RefractorSyntax } from 'refractor/core';
  const d: RefractorSyntax;
  export = d;
}

declare module 'refractor/lang/dart' {
  import { RefractorSyntax } from 'refractor/core';
  const dart: RefractorSyntax;
  export = dart;
}

declare module 'refractor/lang/diff' {
  import { RefractorSyntax } from 'refractor/core';
  const diff: RefractorSyntax;
  export = diff;
}

declare module 'refractor/lang/django' {
  import { RefractorSyntax } from 'refractor/core';
  const django: RefractorSyntax;
  export = django;
}

declare module 'refractor/lang/docker' {
  import { RefractorSyntax } from 'refractor/core';
  const docker: RefractorSyntax;
  export = docker;
}

declare module 'refractor/lang/ebnf' {
  import { RefractorSyntax } from 'refractor/core';
  const ebnf: RefractorSyntax;
  export = ebnf;
}

declare module 'refractor/lang/eiffel' {
  import { RefractorSyntax } from 'refractor/core';
  const eiffel: RefractorSyntax;
  export = eiffel;
}

declare module 'refractor/lang/ejs' {
  import { RefractorSyntax } from 'refractor/core';
  const ejs: RefractorSyntax;
  export = ejs;
}

declare module 'refractor/lang/elixir' {
  import { RefractorSyntax } from 'refractor/core';
  const elixir: RefractorSyntax;
  export = elixir;
}

declare module 'refractor/lang/elm' {
  import { RefractorSyntax } from 'refractor/core';
  const elm: RefractorSyntax;
  export = elm;
}

declare module 'refractor/lang/erb' {
  import { RefractorSyntax } from 'refractor/core';
  const erb: RefractorSyntax;
  export = erb;
}

declare module 'refractor/lang/erlang' {
  import { RefractorSyntax } from 'refractor/core';
  const erlang: RefractorSyntax;
  export = erlang;
}

declare module 'refractor/lang/flow' {
  import { RefractorSyntax } from 'refractor/core';
  const flow: RefractorSyntax;
  export = flow;
}

declare module 'refractor/lang/fortran' {
  import { RefractorSyntax } from 'refractor/core';
  const fortran: RefractorSyntax;
  export = fortran;
}

declare module 'refractor/lang/fsharp' {
  import { RefractorSyntax } from 'refractor/core';
  const fsharp: RefractorSyntax;
  export = fsharp;
}

declare module 'refractor/lang/gcode' {
  import { RefractorSyntax } from 'refractor/core';
  const gcode: RefractorSyntax;
  export = gcode;
}

declare module 'refractor/lang/gedcom' {
  import { RefractorSyntax } from 'refractor/core';
  const gedcom: RefractorSyntax;
  export = gedcom;
}

declare module 'refractor/lang/gherkin' {
  import { RefractorSyntax } from 'refractor/core';
  const gherkin: RefractorSyntax;
  export = gherkin;
}

declare module 'refractor/lang/git' {
  import { RefractorSyntax } from 'refractor/core';
  const git: RefractorSyntax;
  export = git;
}

declare module 'refractor/lang/glsl' {
  import { RefractorSyntax } from 'refractor/core';
  const glsl: RefractorSyntax;
  export = glsl;
}

declare module 'refractor/lang/gml' {
  import { RefractorSyntax } from 'refractor/core';
  const gml: RefractorSyntax;
  export = gml;
}

declare module 'refractor/lang/go' {
  import { RefractorSyntax } from 'refractor/core';
  const go: RefractorSyntax;
  export = go;
}

declare module 'refractor/lang/graphql' {
  import { RefractorSyntax } from 'refractor/core';
  const graphql: RefractorSyntax;
  export = graphql;
}

declare module 'refractor/lang/groovy' {
  import { RefractorSyntax } from 'refractor/core';
  const groovy: RefractorSyntax;
  export = groovy;
}

declare module 'refractor/lang/haml' {
  import { RefractorSyntax } from 'refractor/core';
  const haml: RefractorSyntax;
  export = haml;
}

declare module 'refractor/lang/handlebars' {
  import { RefractorSyntax } from 'refractor/core';
  const handlebars: RefractorSyntax;
  export = handlebars;
}

declare module 'refractor/lang/haskell' {
  import { RefractorSyntax } from 'refractor/core';
  const haskell: RefractorSyntax;
  export = haskell;
}

declare module 'refractor/lang/haxe' {
  import { RefractorSyntax } from 'refractor/core';
  const haxe: RefractorSyntax;
  export = haxe;
}

declare module 'refractor/lang/hcl' {
  import { RefractorSyntax } from 'refractor/core';
  const hcl: RefractorSyntax;
  export = hcl;
}

declare module 'refractor/lang/hpkp' {
  import { RefractorSyntax } from 'refractor/core';
  const hpkp: RefractorSyntax;
  export = hpkp;
}

declare module 'refractor/lang/hsts' {
  import { RefractorSyntax } from 'refractor/core';
  const hsts: RefractorSyntax;
  export = hsts;
}

declare module 'refractor/lang/http' {
  import { RefractorSyntax } from 'refractor/core';
  const http: RefractorSyntax;
  export = http;
}

declare module 'refractor/lang/ichigojam' {
  import { RefractorSyntax } from 'refractor/core';
  const ichigojam: RefractorSyntax;
  export = ichigojam;
}

declare module 'refractor/lang/icon' {
  import { RefractorSyntax } from 'refractor/core';
  const icon: RefractorSyntax;
  export = icon;
}

declare module 'refractor/lang/inform7' {
  import { RefractorSyntax } from 'refractor/core';
  const inform7: RefractorSyntax;
  export = inform7;
}

declare module 'refractor/lang/ini' {
  import { RefractorSyntax } from 'refractor/core';
  const ini: RefractorSyntax;
  export = ini;
}

declare module 'refractor/lang/io' {
  import { RefractorSyntax } from 'refractor/core';
  const io: RefractorSyntax;
  export = io;
}

declare module 'refractor/lang/j' {
  import { RefractorSyntax } from 'refractor/core';
  const j: RefractorSyntax;
  export = j;
}

declare module 'refractor/lang/java' {
  import { RefractorSyntax } from 'refractor/core';
  const java: RefractorSyntax;
  export = java;
}

declare module 'refractor/lang/javadoc' {
  import { RefractorSyntax } from 'refractor/core';
  const javadoc: RefractorSyntax;
  export = javadoc;
}

declare module 'refractor/lang/javadoclike' {
  import { RefractorSyntax } from 'refractor/core';
  const javadoclike: RefractorSyntax;
  export = javadoclike;
}

declare module 'refractor/lang/javascript' {
  import { RefractorSyntax } from 'refractor/core';
  const javascript: RefractorSyntax;
  export = javascript;
}

declare module 'refractor/lang/javastacktrace' {
  import { RefractorSyntax } from 'refractor/core';
  const javastacktrace: RefractorSyntax;
  export = javastacktrace;
}

declare module 'refractor/lang/jolie' {
  import { RefractorSyntax } from 'refractor/core';
  const jolie: RefractorSyntax;
  export = jolie;
}

declare module 'refractor/lang/js-extras' {
  import { RefractorSyntax } from 'refractor/core';
  const jsExtras: RefractorSyntax;
  export = jsExtras;
}

declare module 'refractor/lang/jsdoc' {
  import { RefractorSyntax } from 'refractor/core';
  const jsdoc: RefractorSyntax;
  export = jsdoc;
}

declare module 'refractor/lang/json' {
  import { RefractorSyntax } from 'refractor/core';
  const json: RefractorSyntax;
  export = json;
}

declare module 'refractor/lang/json5' {
  import { RefractorSyntax } from 'refractor/core';
  const json5: RefractorSyntax;
  export = json5;
}

declare module 'refractor/lang/jsonp' {
  import { RefractorSyntax } from 'refractor/core';
  const jsonp: RefractorSyntax;
  export = jsonp;
}

declare module 'refractor/lang/jsx' {
  import { RefractorSyntax } from 'refractor/core';
  const jsx: RefractorSyntax;
  export = jsx;
}

declare module 'refractor/lang/julia' {
  import { RefractorSyntax } from 'refractor/core';
  const julia: RefractorSyntax;
  export = julia;
}

declare module 'refractor/lang/keyman' {
  import { RefractorSyntax } from 'refractor/core';
  const keyman: RefractorSyntax;
  export = keyman;
}

declare module 'refractor/lang/kotlin' {
  import { RefractorSyntax } from 'refractor/core';
  const kotlin: RefractorSyntax;
  export = kotlin;
}

declare module 'refractor/lang/latex' {
  import { RefractorSyntax } from 'refractor/core';
  const latex: RefractorSyntax;
  export = latex;
}

declare module 'refractor/lang/less' {
  import { RefractorSyntax } from 'refractor/core';
  const less: RefractorSyntax;
  export = less;
}

declare module 'refractor/lang/liquid' {
  import { RefractorSyntax } from 'refractor/core';
  const liquid: RefractorSyntax;
  export = liquid;
}

declare module 'refractor/lang/lisp' {
  import { RefractorSyntax } from 'refractor/core';
  const lisp: RefractorSyntax;
  export = lisp;
}

declare module 'refractor/lang/livescript' {
  import { RefractorSyntax } from 'refractor/core';
  const livescript: RefractorSyntax;
  export = livescript;
}

declare module 'refractor/lang/lolcode' {
  import { RefractorSyntax } from 'refractor/core';
  const lolcode: RefractorSyntax;
  export = lolcode;
}

declare module 'refractor/lang/lua' {
  import { RefractorSyntax } from 'refractor/core';
  const lua: RefractorSyntax;
  export = lua;
}

declare module 'refractor/lang/makefile' {
  import { RefractorSyntax } from 'refractor/core';
  const makefile: RefractorSyntax;
  export = makefile;
}

declare module 'refractor/lang/markdown' {
  import { RefractorSyntax } from 'refractor/core';
  const markdown: RefractorSyntax;
  export = markdown;
}

declare module 'refractor/lang/markup-templating' {
  import { RefractorSyntax } from 'refractor/core';
  const markuptemplating: RefractorSyntax;
  export = markuptemplating;
}

declare module 'refractor/lang/markup' {
  import { RefractorSyntax } from 'refractor/core';
  const markup: RefractorSyntax;
  export = markup;
}

declare module 'refractor/lang/matlab' {
  import { RefractorSyntax } from 'refractor/core';
  const matlab: RefractorSyntax;
  export = matlab;
}

declare module 'refractor/lang/mel' {
  import { RefractorSyntax } from 'refractor/core';
  const mel: RefractorSyntax;
  export = mel;
}

declare module 'refractor/lang/mizar' {
  import { RefractorSyntax } from 'refractor/core';
  const mizar: RefractorSyntax;
  export = mizar;
}

declare module 'refractor/lang/monkey' {
  import { RefractorSyntax } from 'refractor/core';
  const monkey: RefractorSyntax;
  export = monkey;
}

declare module 'refractor/lang/n1ql' {
  import { RefractorSyntax } from 'refractor/core';
  const n1ql: RefractorSyntax;
  export = n1ql;
}

declare module 'refractor/lang/n4js' {
  import { RefractorSyntax } from 'refractor/core';
  const n4js: RefractorSyntax;
  export = n4js;
}

declare module 'refractor/lang/nand2tetris-hdl' {
  import { RefractorSyntax } from 'refractor/core';
  const nand2tetrishdl: RefractorSyntax;
  export = nand2tetrishdl;
}

declare module 'refractor/lang/nasm' {
  import { RefractorSyntax } from 'refractor/core';
  const nasm: RefractorSyntax;
  export = nasm;
}

declare module 'refractor/lang/nginx' {
  import { RefractorSyntax } from 'refractor/core';
  const nginx: RefractorSyntax;
  export = nginx;
}

declare module 'refractor/lang/nim' {
  import { RefractorSyntax } from 'refractor/core';
  const nim: RefractorSyntax;
  export = nim;
}

declare module 'refractor/lang/nix' {
  import { RefractorSyntax } from 'refractor/core';
  const nix: RefractorSyntax;
  export = nix;
}

declare module 'refractor/lang/nsis' {
  import { RefractorSyntax } from 'refractor/core';
  const nsis: RefractorSyntax;
  export = nsis;
}

declare module 'refractor/lang/objectivec' {
  import { RefractorSyntax } from 'refractor/core';
  const objectivec: RefractorSyntax;
  export = objectivec;
}

declare module 'refractor/lang/ocaml' {
  import { RefractorSyntax } from 'refractor/core';
  const ocaml: RefractorSyntax;
  export = ocaml;
}

declare module 'refractor/lang/opencl' {
  import { RefractorSyntax } from 'refractor/core';
  const opencl: RefractorSyntax;
  export = opencl;
}

declare module 'refractor/lang/oz' {
  import { RefractorSyntax } from 'refractor/core';
  const oz: RefractorSyntax;
  export = oz;
}

declare module 'refractor/lang/parigp' {
  import { RefractorSyntax } from 'refractor/core';
  const parigp: RefractorSyntax;
  export = parigp;
}

declare module 'refractor/lang/parser' {
  import { RefractorSyntax } from 'refractor/core';
  const parser: RefractorSyntax;
  export = parser;
}

declare module 'refractor/lang/pascal' {
  import { RefractorSyntax } from 'refractor/core';
  const pascal: RefractorSyntax;
  export = pascal;
}

declare module 'refractor/lang/perl' {
  import { RefractorSyntax } from 'refractor/core';
  const perl: RefractorSyntax;
  export = perl;
}

declare module 'refractor/lang/php-extras' {
  import { RefractorSyntax } from 'refractor/core';
  const phpextras: RefractorSyntax;
  export = phpextras;
}

declare module 'refractor/lang/php' {
  import { RefractorSyntax } from 'refractor/core';
  const php: RefractorSyntax;
  export = php;
}

declare module 'refractor/lang/phpdoc' {
  import { RefractorSyntax } from 'refractor/core';
  const phpdoc: RefractorSyntax;
  export = phpdoc;
}

declare module 'refractor/lang/plsql' {
  import { RefractorSyntax } from 'refractor/core';
  const plsql: RefractorSyntax;
  export = plsql;
}

declare module 'refractor/lang/powershell' {
  import { RefractorSyntax } from 'refractor/core';
  const powershell: RefractorSyntax;
  export = powershell;
}

declare module 'refractor/lang/processing' {
  import { RefractorSyntax } from 'refractor/core';
  const processing: RefractorSyntax;
  export = processing;
}

declare module 'refractor/lang/prolog' {
  import { RefractorSyntax } from 'refractor/core';
  const prolog: RefractorSyntax;
  export = prolog;
}

declare module 'refractor/lang/properties' {
  import { RefractorSyntax } from 'refractor/core';
  const properties: RefractorSyntax;
  export = properties;
}

declare module 'refractor/lang/protobuf' {
  import { RefractorSyntax } from 'refractor/core';
  const protobuf: RefractorSyntax;
  export = protobuf;
}

declare module 'refractor/lang/pug' {
  import { RefractorSyntax } from 'refractor/core';
  const pug: RefractorSyntax;
  export = pug;
}

declare module 'refractor/lang/puppet' {
  import { RefractorSyntax } from 'refractor/core';
  const puppet: RefractorSyntax;
  export = puppet;
}

declare module 'refractor/lang/pure' {
  import { RefractorSyntax } from 'refractor/core';
  const pure: RefractorSyntax;
  export = pure;
}

declare module 'refractor/lang/python' {
  import { RefractorSyntax } from 'refractor/core';
  const python: RefractorSyntax;
  export = python;
}

declare module 'refractor/lang/q' {
  import { RefractorSyntax } from 'refractor/core';
  const q: RefractorSyntax;
  export = q;
}

declare module 'refractor/lang/qore' {
  import { RefractorSyntax } from 'refractor/core';
  const qore: RefractorSyntax;
  export = qore;
}

declare module 'refractor/lang/r' {
  import { RefractorSyntax } from 'refractor/core';
  const r: RefractorSyntax;
  export = r;
}

declare module 'refractor/lang/reason' {
  import { RefractorSyntax } from 'refractor/core';
  const reason: RefractorSyntax;
  export = reason;
}

declare module 'refractor/lang/regex' {
  import { RefractorSyntax } from 'refractor/core';
  const regex: RefractorSyntax;
  export = regex;
}

declare module 'refractor/lang/renpy' {
  import { RefractorSyntax } from 'refractor/core';
  const renpy: RefractorSyntax;
  export = renpy;
}

declare module 'refractor/lang/rest' {
  import { RefractorSyntax } from 'refractor/core';
  const rest: RefractorSyntax;
  export = rest;
}

declare module 'refractor/lang/rip' {
  import { RefractorSyntax } from 'refractor/core';
  const rip: RefractorSyntax;
  export = rip;
}

declare module 'refractor/lang/roboconf' {
  import { RefractorSyntax } from 'refractor/core';
  const roboconf: RefractorSyntax;
  export = roboconf;
}

declare module 'refractor/lang/ruby' {
  import { RefractorSyntax } from 'refractor/core';
  const ruby: RefractorSyntax;
  export = ruby;
}

declare module 'refractor/lang/rust' {
  import { RefractorSyntax } from 'refractor/core';
  const rust: RefractorSyntax;
  export = rust;
}

declare module 'refractor/lang/sas' {
  import { RefractorSyntax } from 'refractor/core';
  const sas: RefractorSyntax;
  export = sas;
}

declare module 'refractor/lang/sass' {
  import { RefractorSyntax } from 'refractor/core';
  const sass: RefractorSyntax;
  export = sass;
}

declare module 'refractor/lang/scala' {
  import { RefractorSyntax } from 'refractor/core';
  const scala: RefractorSyntax;
  export = scala;
}

declare module 'refractor/lang/scheme' {
  import { RefractorSyntax } from 'refractor/core';
  const scheme: RefractorSyntax;
  export = scheme;
}

declare module 'refractor/lang/scss' {
  import { RefractorSyntax } from 'refractor/core';
  const scss: RefractorSyntax;
  export = scss;
}

declare module 'refractor/lang/smalltalk' {
  import { RefractorSyntax } from 'refractor/core';
  const smalltalk: RefractorSyntax;
  export = smalltalk;
}

declare module 'refractor/lang/smarty' {
  import { RefractorSyntax } from 'refractor/core';
  const smarty: RefractorSyntax;
  export = smarty;
}

declare module 'refractor/lang/soy' {
  import { RefractorSyntax } from 'refractor/core';
  const soy: RefractorSyntax;
  export = soy;
}

declare module 'refractor/lang/sql' {
  import { RefractorSyntax } from 'refractor/core';
  const sql: RefractorSyntax;
  export = sql;
}

declare module 'refractor/lang/stylus' {
  import { RefractorSyntax } from 'refractor/core';
  const stylus: RefractorSyntax;
  export = stylus;
}

declare module 'refractor/lang/swift' {
  import { RefractorSyntax } from 'refractor/core';
  const swift: RefractorSyntax;
  export = swift;
}

declare module 'refractor/lang/t4-cs' {
  import { RefractorSyntax } from 'refractor/core';
  const t4cs: RefractorSyntax;
  export = t4cs;
}

declare module 'refractor/lang/t4-templating' {
  import { RefractorSyntax } from 'refractor/core';
  const t4templating: RefractorSyntax;
  export = t4templating;
}

declare module 'refractor/lang/t4-vb' {
  import { RefractorSyntax } from 'refractor/core';
  const t4vb: RefractorSyntax;
  export = t4vb;
}

declare module 'refractor/lang/tap' {
  import { RefractorSyntax } from 'refractor/core';
  const tap: RefractorSyntax;
  export = tap;
}

declare module 'refractor/lang/tcl' {
  import { RefractorSyntax } from 'refractor/core';
  const tcl: RefractorSyntax;
  export = tcl;
}

declare module 'refractor/lang/textile' {
  import { RefractorSyntax } from 'refractor/core';
  const textile: RefractorSyntax;
  export = textile;
}

declare module 'refractor/lang/toml' {
  import { RefractorSyntax } from 'refractor/core';
  const toml: RefractorSyntax;
  export = toml;
}

declare module 'refractor/lang/tsx' {
  import { RefractorSyntax } from 'refractor/core';
  const tsx: RefractorSyntax;
  export = tsx;
}

declare module 'refractor/lang/tt2' {
  import { RefractorSyntax } from 'refractor/core';
  const tt2: RefractorSyntax;
  export = tt2;
}

declare module 'refractor/lang/twig' {
  import { RefractorSyntax } from 'refractor/core';
  const twig: RefractorSyntax;
  export = twig;
}

declare module 'refractor/lang/typescript' {
  import { RefractorSyntax } from 'refractor/core';
  const typescript: RefractorSyntax;
  export = typescript;
}

declare module 'refractor/lang/vala' {
  import { RefractorSyntax } from 'refractor/core';
  const vala: RefractorSyntax;
  export = vala;
}

declare module 'refractor/lang/vbnet' {
  import { RefractorSyntax } from 'refractor/core';
  const vbnet: RefractorSyntax;
  export = vbnet;
}

declare module 'refractor/lang/velocity' {
  import { RefractorSyntax } from 'refractor/core';
  const velocity: RefractorSyntax;
  export = velocity;
}

declare module 'refractor/lang/verilog' {
  import { RefractorSyntax } from 'refractor/core';
  const verilog: RefractorSyntax;
  export = verilog;
}

declare module 'refractor/lang/vhdl' {
  import { RefractorSyntax } from 'refractor/core';
  const vhdl: RefractorSyntax;
  export = vhdl;
}

declare module 'refractor/lang/vim' {
  import { RefractorSyntax } from 'refractor/core';
  const vim: RefractorSyntax;
  export = vim;
}

declare module 'refractor/lang/visual-basic' {
  import { RefractorSyntax } from 'refractor/core';
  const visualbasic: RefractorSyntax;
  export = visualbasic;
}

declare module 'refractor/lang/wasm' {
  import { RefractorSyntax } from 'refractor/core';
  const wasm: RefractorSyntax;
  export = wasm;
}

declare module 'refractor/lang/wiki' {
  import { RefractorSyntax } from 'refractor/core';
  const wiki: RefractorSyntax;
  export = wiki;
}

declare module 'refractor/lang/xeora' {
  import { RefractorSyntax } from 'refractor/core';
  const xeora: RefractorSyntax;
  export = xeora;
}

declare module 'refractor/lang/xojo' {
  import { RefractorSyntax } from 'refractor/core';
  const xojo: RefractorSyntax;
  export = xojo;
}

declare module 'refractor/lang/xquery' {
  import { RefractorSyntax } from 'refractor/core';
  const xquery: RefractorSyntax;
  export = xquery;
}

declare module 'refractor/lang/yaml' {
  import { RefractorSyntax } from 'refractor/core';
  const yaml: RefractorSyntax;
  export = yaml;
}
