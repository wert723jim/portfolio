// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/content',
    '@nuxtjs/apollo'
  ],
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN
  },
  content: {
    //https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: 'nord',
      preload: ['js', 'ts', 'css', 'json', 'html', 'vue']
    }
  },
  apollo: {
    clients: {
      default: {
        tokenName: 'githubToken',
        httpEndpoint: 'https://api.github.com/graphql'
      }
    }
  }
})
