import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
    include: ['src/**/*.test.ts'],
    exclude: ['tests/e2e/**', 'node_modules/**', 'dist/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'json-summary', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        '.astro/',
        '**/*.config.*',
        '**/types.ts',
        '**/*.d.ts',
        'tests/e2e/**',
        '**/__mocks__/**',
      ],
    },
    alias: {
      'astro:content': '/src/utils/__mocks__/astro-content.ts',
    },
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@layouts': '/src/layouts',
      '@utils': '/src/utils',
      '@assets': '/src/assets',
      '@styles': '/src/styles',
      '@templates': '/src/templates',
      '@config': '/src/config',
      '@i18n': '/src/i18n',
    },
  },
});
