import base from './index';
// http://json.schemastore.org/prettierrc
// eslint-disable-next-line no-restricted-exports
export default {
  ...base,
  plugins: ['prettier-plugin-curly', 'prettier-plugin-packagejson'],
};
