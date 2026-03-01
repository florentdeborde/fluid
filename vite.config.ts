/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const projectDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      rollupTypes: true,
      insertTypesEntry: true,
    })
  ],
  build: {
    lib: {
      entry: {
        index: resolve(projectDir, 'src/index.ts'),
        fluid: resolve(projectDir, 'src/fluid.ts'),
      },
      name: 'fluid',
      formats: ['es'],
      fileName: (_: string, entryName: string) => `${entryName}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
    target: 'esnext',
    minify: 'esbuild',
  },
  test: {
    projects: [
      {
        name: 'unit',
        test: {
          environment: 'jsdom',
          include: ['src/**/*.test.{ts,tsx}'],
          setupFiles: ['./vitest.setup.ts']
        }
      },
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(projectDir, '.storybook')
          })
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }]
          },
          setupFiles: ['.storybook/vitest.setup.ts']
        }
      }
    ]
  } as any
});