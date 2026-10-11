import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const helloPath = fileURLToPath(new URL('../HELLO.md', import.meta.url));
const expected = Buffer.from('Hello, world!');

test('HELLO.md contém exatamente a mensagem solicitada', async () => {
  const actual = await readFile(helloPath);
  assert.deepEqual(actual, expected);
});
