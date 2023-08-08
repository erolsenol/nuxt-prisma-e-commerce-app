// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
  //   ['@nuxtjs/eslint-module', { ...eslint }]
  '@nuxtjs/i18n',
  '@nuxt/image',
  '@nuxtjs/device',
  'nuxt-icon'
  ],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },
  image: {
    // Options
  }
})
