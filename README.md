# Sharable RBX Prettier Config

## Installation

```sh
npm install -D @rodbe/prettier-config prettier
```

### If you want to use the mid config, install the peer dependencies

```sh
npm install -D prettier-plugin-curly prettier-plugin-packagejson
```

## Usage

| Type | How to import?             | peerDependencies (to install in your project)                      |
|------|----------------------------|--------------------------------------------------------------------|
| lite | @rodbe/prettier-config     | prettier                                                           |
| mid  | @rodbe/prettier-config/mid | prettier <br>prettier-plugin-curly <br>prettier-plugin-packagejson |

### In JS file: `.prettierrc.js`, or `prettier.config.js`

```ts
import rodbePrettier from "@rodbe/prettier-config";
// import rodbePrettier from "@rodbe/prettier-config/mid";

/**
 * @type {import("prettier").Config}
 */
const config = {
  ...rodbePrettier,
  semi: false,
};

export default config;
```

### In JSON format: `.prettierrc`, `.prettierrc.json`
```jsonc
"@rodbe/prettier-config"
// or
// "@rodbe/prettier-config/mid"
```


### In `package.json`
```jsonc
{
  "name": "my-cool-library",
  "version": "1.0.0",
  "prettier": "@rodbe/prettier-config",
  // or
  // "prettier": "@rodbe/prettier-config/mid",
  "prettierOptions": {
    "semi": false
  }
}
````

### In order to make this work, you have to install prettier and the other peer dependencies for the project.

```json
{
  "name": "my-cool-library",
  "version": "1.0.0",
  "type": "module",
  "exports": "./index.js",
  "publishConfig": {
    "access": "public"
  },
+ "devDependencies": {
+   "prettier": "^3.3.3",
+   "prettier-plugin-curly": "^0.3.1",
+   "prettier-plugin-packagejson": "^2.5.8"
+ }
}
```