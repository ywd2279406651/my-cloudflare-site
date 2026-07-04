import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // 根目录：如果你的 html 都在 src 下就保留这行，在根目录则删掉
  root: 'src',
  
  // 构建配置：指定所有页面入口
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        links: resolve(__dirname, 'src/links.html'),
        gallery: resolve(__dirname, 'src/gallery.html'),
        about: resolve(__dirname, 'src/about.html'),
        subscribe: resolve(__dirname, 'src/subscribe.html') // 新增订阅页入口
      }
    }
  },
  
  // 本地开发服务器配置
  server: {
    port: 5173,
    open: '/index.html'
  }
})
