import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/QuickCartEcomProject/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),                     // root
        about: resolve(__dirname, 'src/about.html'),                // src folder
        contact: resolve(__dirname, 'src/contact.html'),
        products: resolve(__dirname, 'src/products.html'),
        addToCart: resolve(__dirname, 'src/add-to-cart.html'),
        signIn: resolve(__dirname, 'src/sign-in.html'),
        signUp: resolve(__dirname, 'src/sign-up.html'),             // keep your filename typo if exists
      },
    },
  },
});
