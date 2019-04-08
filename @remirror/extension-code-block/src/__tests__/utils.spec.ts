import refractor from 'refractor/core';
import typescript from 'refractor/lang/typescript';

refractor.register(typescript);

test('refractor syntax', () => {
  console.log(
    JSON.stringify(
      refractor.highlight(
        `// a + 2;
  1 + 1`,
        'typescript',
      ),
      null,
      2,
    ),
  );
});
