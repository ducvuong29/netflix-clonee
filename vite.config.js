import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default {
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           'vendor': ['react', 'react-dom']
//         }
//       }
//     }
//   }
// }
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 10000,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
          return;
        }
        warn(warning);
      },
    },
  },
  plugins: [react()],
});