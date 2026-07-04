import { defineConfig } from 'vite'
import { resolve } from 'path'
const buildTime = new Date().getTime()

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        links: resolve(__dirname, 'src/links.html'),
        gallery: resolve(__dirname, 'src/gallery.html'),
        about: resolve(__dirname, 'src/about.html'),
        subscribe: resolve(__dirname, 'src/subscribe.html')
      },
      output: {
        entryFileNames: `assets/js/[name]-[hash]-${buildTime}.js`,
        chunkFileNames: `assets/js/[name]-[hash]-${buildTime}.js`,
        assetFileNames: `assets/[ext]/[name]-[hash]-${buildTime}.[ext]`
      }
    }
  },
  server: {
    port: 5173,
    open: '/index.html'
  }
})
