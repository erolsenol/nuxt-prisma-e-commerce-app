// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    //   ['@nuxtjs/eslint-module', { ...eslint }]
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxtjs/device",
    "nuxt-icon",
    "nuxt-swiper",
    "nuxt-lodash",
    "@nuxtjs/google-fonts",
    "@hypernym/nuxt-anime",
    "nuxt-snackbar",
    "@element-plus/nuxt",
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  extends: ["nuxt-seo-kit"],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://example.com",
      siteName: "Awesome Site",
      siteDescription: "Welcome to my awesome site!",
      language: "en", // prefer more explicit language codes like `en-AU` over `en`
    },
  },
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  $development: {
    //
  },
  css: [
    '~/assets/_colors.scss',
    '~/assets/_el_plus.scss'
  ],
  //global style not working
  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },
  snackbar: {
    bottom: true,
    right: true,
    duration: 5000,
  },
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
  image: {
    // Options
  },
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  lodash: {
    prefix: "_",
    prefixSkip: ["string"],
    upperAfterPrefix: false,
    exclude: ["map"],
    alias: [
      ['~/', `${path.resolve(__dirname, '.')}/`],
      ["camelCase", "stringToCamelCase"], // => stringToCamelCase
      ["kebabCase", "stringToKebab"], // => stringToKebab
      ["isDate", "isLodashDate"], // => _isLodashDate
    ],
  },
  googleFonts: {
    families: {
      Roboto: true,
      Inter: [400, 700],
       'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },
});
