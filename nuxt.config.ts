// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/content'
  ],
  content: {
    //https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: 'nord',
      preload: ['js', 'ts', 'css', 'json', 'html', 'vue']
    }
  }
})
