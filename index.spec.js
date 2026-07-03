import path from 'path';
import { describe, expect, it } from 'vitest';
import format from './index.js';

const srcPath = path.join(import.meta.dirname, 'README.md');

describe('markdown-magic-template', () => {
  it('renders a lodash template with data options', () => {
    expect(
      format({
        content: 'foo',
        options: { src: './template.md', data: { name: 'world' } },
        srcPath,
      }),
    ).toBe('## hello world!\n');
  });

  it('returns original content when no src option is given', () => {
    expect(format({ content: 'untouched', options: {}, srcPath })).toBe(
      'untouched',
    );
  });
});
