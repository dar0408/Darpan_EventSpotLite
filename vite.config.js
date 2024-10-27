import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       external: ['react-icons/fc'], // Prevents bundling of react-icons/fc
//     },
//   },
// });

export default {
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-icons/Fc']
    }
  }
}
