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
  ],
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
});
