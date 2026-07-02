import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about.html'),
        links: resolve(__dirname, 'src/links.html'),
        gallery: resolve(__dirname, 'src/gallery.html') // 图库页面入口
      }
    }
  },
  publicDir: '../public',
  server: {
    port: 5173,
    open: true
  }
})