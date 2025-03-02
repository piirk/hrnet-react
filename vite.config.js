import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', '@mui/material'],
    force: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@reduxjs/toolkit') || id.includes('react-redux')) {
              return 'redux'
            }
            if (id.includes('react-hook-form')) {
              return 'hook-form'
            }
            if (id.includes('dayjs')) {
              return 'dayjs'
            }
            if (id.includes('react')) {
              return 'react'
            }
            return 'vendor'
          }
        },
      },
    },
    minify: 'esbuild',
  },
  resolve: {
    dedupe: ['react', 'react-dom', '@mui/material'],
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@features': path.resolve(__dirname, './src/features'),
      '@models': path.resolve(__dirname, './src/models'),
      '@redux': path.resolve(__dirname, './src/redux'),

      //'@services': path.resolve(__dirname, './src/services'),
      '@': path.resolve(__dirname, './src'),
    },
  },
})
