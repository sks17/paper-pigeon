import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'aws-sdk': [
            '@aws-sdk/client-bedrock-agent-runtime',
            '@aws-sdk/client-dynamodb',
            '@aws-sdk/client-s3',
            '@aws-sdk/lib-dynamodb',
            '@aws-sdk/s3-request-presigner',
            '@aws-sdk/util-dynamodb'
          ],
          '3d-libs': ['three', 'three-spritetext', '3d-force-graph'],
          'd3-libs': ['d3', 'd3-force'],
          'vendor': ['react', 'react-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false
  }
})
