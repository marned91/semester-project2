import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  appType: 'mpa',
  base: '',
  build: {
    outDir: 'dist',
    target: 'esnext',
    sourcemap: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'), // Home
        listingsPerCategory: resolve(__dirname, 'listings/index.html'), //Listings per category
        login: resolve(__dirname, 'auth/login/index.html'), // Login
        register: resolve(__dirname, 'auth/register/index.html'), // Register
        profile: resolve(__dirname, 'profile/index.html'), // Profile logged-in users
        profileUpdate: resolve(__dirname, 'profile/update/index.html'), // Profile update
        profilePurchases: resolve(__dirname, 'profile/purchases/index.html'), // Profile purchases
        listingCreate: resolve(__dirname, 'listings/create/index.html'), // Create new listing
        listingView: resolve(__dirname, 'listings/view/index.html'), // View listing
        listingsSearch: resolve(__dirname, 'listings/search/index.html'), //Search results
        terms: resolve(__dirname, 'terms/index.html'), //Terms
      },
    },
  },
})
