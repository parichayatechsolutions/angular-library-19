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
  },
  plugins: [
    {
      name: 'rename-index-html',
      generateBundle(_, bundle) {
        for (const fileName in bundle) {
          if (fileName === 'index.html') {
            bundle['home.html'] = { ...bundle[fileName] }
            delete bundle[fileName]
          }
        }
      }
    }
  ]
})
