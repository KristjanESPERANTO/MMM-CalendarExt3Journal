import css from '@eslint/css'
import js from '@eslint/js'
import markdown from '@eslint/markdown'
import { defineConfig } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
  {
    ignores: ['CX3_Shared/**'],
  },
  {
    files: ['**/*.css'],
    languageOptions: { tolerant: true },
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
    rules: {
      'css/no-invalid-properties': 'off',
      'css/use-baseline': 'off',
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: {
        ...globals.browser,
        ...globals.node,
        Log: 'readonly',
        Module: 'readonly',
      },
    },
    extends: [js.configs.recommended],
    rules: {
      'no-unused-vars': 'off',
      'no-useless-assignment': 'off',
    },
  },
  {
    files: ['**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        config: 'readonly',
      },
    },
    extends: [js.configs.recommended],
    rules: {
      'no-unused-vars': 'off',
    },
  },
  {
    files: ['demo.config.js'],
    rules: {

    },
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/gfm',
    extends: ['markdown/recommended'],
    rules: {
      'markdown/no-space-in-emphasis': 'off',
    },
  },
])
