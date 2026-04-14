import js from "@eslint/js";
import { rules as prettierConfigRules } from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import prettierPlugin from "eslint-plugin-prettier";
import tseslint from "typescript-eslint";
import globals from "globals";

export default [
  {
    ignores: [".astro/", "dist/"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  // Prettier plugin
  {
    plugins: {
      prettier: prettierPlugin,
    },
  },
  // Prettier config — disables conflicting ESLint rules, then enables prettier/prettier
  {
    rules: {
      ...prettierConfigRules,
      "prettier/prettier": "error",
    },
  },
  // Astro overrides: use TS parser for script blocks, disable prettier (handled by astro-prettier plugin)
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      "prettier/prettier": "off",
    },
  },
  {
    files: ["**/*.astro/*.ts"],
    rules: {
      "prettier/prettier": "off",
    },
  },
];
