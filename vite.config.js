import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        privacy: 'privacy-policy.html',
        terms: 'terms-conditions.html'
      }
    }
  },
  plugins: [
    {
      name: 'copy-sitemap',
      writeBundle() {
        // 复制 sitemap.xml 到构建目录
        fs.copyFileSync('sitemap.xml', 'dist/sitemap.xml')
      }
    }
  ]
}) 