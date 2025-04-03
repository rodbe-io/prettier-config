// http://json.schemastore.org/prettierrc
// eslint-disable-next-line no-restricted-exports
export default {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  overrides: [
    { files: '.*rc', options: { parser: 'json' } },
    { files: '.nvmrc', options: { parser: 'yaml' } },
  ],
  printWidth: 100,
  proseWrap: 'preserve',
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
};
