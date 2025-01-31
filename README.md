# Sharable RBX Prettier Config

## Installation

```sh
npm install -D @rodbe/prettier-config
```

## Usage
### In `.prettierrc.js`, or `prettier.config.js`

```ts
import rodbePrettier from "@rodbe/prettier-config";

/**
 * @type {import("prettier").Config}
 */
const config = {
  ...rodbePrettier,
  semi: false,
};

export default config;
```
### In `package.json`
```json
{
  "name": "my-cool-library",
  "version": "1.0.0",
  "prettier": "@rodbe/prettier-config",
  "prettierOptions": {
    "semi": false
  }
}
````

### In order to make this work, you have to install prettier for the project.

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
+   "prettier": "^3.3.3"
+ }
}
```