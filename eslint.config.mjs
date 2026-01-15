import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
  // Ignore build outputs and generated files
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**']
  },

  // TypeScript and JavaScript files
  ...tseslint.configs.recommended,

  // Astro files
  ...eslintPluginAstro.configs.recommended,

  // Custom rules
  {
    rules: {
      // Astro-specific rules
      'astro/no-set-html-directive': 'off', // We use set:html for JSON-LD

      // TypeScript rules
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',

      // General best practices
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'warn',
      'no-var': 'error',
    }
  }
];
