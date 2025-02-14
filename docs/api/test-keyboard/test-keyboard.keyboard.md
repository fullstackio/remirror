<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [test-keyboard](./test-keyboard.md) &gt; [Keyboard](./test-keyboard.keyboard.md)

## Keyboard class

<b>Signature:</b>

```typescript
export declare class Keyboard 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)({ target, defaultOptions, isMac, batch, onEventDispatch, })](./test-keyboard.keyboard._constructor_.md) |  | Constructs a new instance of the <code>Keyboard</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [keyDown](./test-keyboard.keyboard.keydown.md) |  | <code>({ options }: OptionsParams) =&gt; this</code> | Triggers a keydown event with provided options |
|  [keyPress](./test-keyboard.keyboard.keypress.md) |  | <code>({ options }: OptionsParams) =&gt; this</code> | Trigger a keypress event with the provided options |
|  [keyUp](./test-keyboard.keyboard.keyup.md) |  | <code>({ options }: OptionsParams) =&gt; this</code> | Trigger a keyup event with the provided options |
|  [status](./test-keyboard.keyboard.status.md) |  | <code>'started' &#124; 'ended' &#124; 'idle'</code> |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [char({ text, options, typing })](./test-keyboard.keyboard.char.md) |  | Dispatches an event for a keyboard character |
|  [create(params)](./test-keyboard.keyboard.create.md) | <code>static</code> |  |
|  [end()](./test-keyboard.keyboard.end.md) |  | Ends the fake timers and sets the keyboard status to 'ended' |
|  [forEach(fn)](./test-keyboard.keyboard.foreach.md) |  | When batched is true the user can run through each event and fire as they please. |
|  [mod({ text, options })](./test-keyboard.keyboard.mod.md) |  | Enables typing modifier commands
```ts
const editor = document.getElementById('editor');
const keyboard = new Keyboard({ target: editor });
keyboard
  .mod({text: 'Shift-Meta-A'})
  .end();

```
 |
|  [start()](./test-keyboard.keyboard.start.md) |  | Starts the fake timers and sets the keyboard status to 'started' |
|  [type({ text, options })](./test-keyboard.keyboard.type.md) |  | Breaks a string into single characters and fires a keyboard into the target node |
|  [usChar({ text, options, typing, })](./test-keyboard.keyboard.uschar.md) |  | Like <code>this.char</code> but only supports US Keyboard Characters. This is mainly a utility for TypeScript and autocomplete support when typing characters. |

