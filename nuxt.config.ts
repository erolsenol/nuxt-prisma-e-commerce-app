// https://nuxt.com/docs/api/configuration/nuxt-config

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
    '@nuxtjs/google-fonts',
    '@hypernym/nuxt-anime'
  ],
  extends: [
    'nuxt-seo-kit'
  ],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      siteName: 'Awesome Site',
      siteDescription: 'Welcome to my awesome site!',
      language: 'en', // prefer more explicit language codes like `en-AU` over `en`
    }
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
      ["camelCase", "stringToCamelCase"], // => stringToCamelCase
      ["kebabCase", "stringToKebab"], // => stringToKebab
      ["isDate", "isLodashDate"], // => _isLodashDate
    ],
  },
  googleFonts: {
    families: {
      Roboto: true,
      Inter: [800, 900],
       'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  }
});
