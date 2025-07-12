// http://json.schemastore.org/prettierrc
// eslint-disable-next-line no-restricted-exports
export default {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  jsxSingleQuote: true,
  objectWrap: 'preserve',
  overrides: [
    { files: '.*rc', options: { parser: 'json' } },
    { files: '.nvmrc', options: { parser: 'yaml' } },
  ],
  printWidth: 100,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  semi: true,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
};
