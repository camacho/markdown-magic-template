import { readFileSync } from 'fs';
import path from 'path';
import template from 'lodash.template';

export default function TEMPLATE({ content, options = {}, srcPath }) {
  if (!options.src) return content;

  const filepath = path.resolve(path.dirname(srcPath), options.src);
  const compiled = template(readFileSync(filepath, 'utf8'));

  return compiled(options.data || {});
}
