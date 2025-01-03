import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "error", // delete this block if not usable
      "no-undef": "error",
    },
    env: {
      node: true,
    },
    eslintConfigPrettier,
  },

  pluginJs.configs.recommended,
];
