import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: '.', // workspace root
  build: {
    outDir: 'vite-dist',
    rollupOptions: {
      input: path.resolve(__dirname, 'dist/wc-consumer-web/browser/index.html'),
      output: {
        entryFileNames: 'web.js',
        assetFileNames: (chunk) =>
          chunk.name && chunk.name.endsWith('.css') ? 'web.css' : chunk.name,
      }
    }
  }
})
