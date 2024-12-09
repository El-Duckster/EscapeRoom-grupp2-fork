import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"], // Include all JavaScript files
    languageOptions: {
      ecmaVersion: "latest", 
      sourceType: "module", 
      globals: {
        ...globals.browser, 
        ...globals.node, 
        ...globals.jest, 
      },
    },
    rules: {
      "no-unused-vars": "warn", 
      "no-console": "off", 
      "no-undef": "error", 
    },
  },
  pluginJs.configs.recommended, 
];
