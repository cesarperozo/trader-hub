import { defineFlatConfig } from 'eslint-define-config';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginTypescriptEslint from '@typescript-eslint/eslint-plugin';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import typescriptParser from '@typescript-eslint/parser';

export default defineFlatConfig([
  {
    languageOptions: {
      parser: typescriptParser, // Asegúrate de usar el parser correcto para TypeScript
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: 'readonly',
      },
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      '@typescript-eslint': eslintPluginTypescriptEslint,
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error', // Marca errores cuando Prettier detecta un problema
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx', '.jsx'] }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);
