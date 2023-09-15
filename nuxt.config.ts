// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: [
    //   ['@nuxtjs/eslint-module', { ...eslint }]
    "@nuxt/image",
    "@nuxtjs/device",
    "nuxt-icon",
    "nuxt-swiper",
    "nuxt-lodash",
    "@nuxtjs/google-fonts",
    "@hypernym/nuxt-anime",
    "nuxt-snackbar",
    "@vee-validate/nuxt",
    "@pinia/nuxt",
    "nuxt-bootstrap-icons",
  ],
  vite: {
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
      }
    },
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
        ]
      })
    ]
  },
  app: {
    // pageTransition: {
    //   name: 'fade',
    //   mode: 'out-in' // default
    // },
    // layoutTransition: {
    //   name: 'slide',
    //   mode: 'out-in' // default
    // }
  },
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
  bootstrapIcons: {
    renderType: "component", // or 'inline' (which is the default)
  },
  // nuxtIcon: {
  //   // size: '24px', // default <Icon> size applied
  //   class: "icon", // default <Icon> class applied
  //   aliases: {
  //     nuxt: "logos:nuxt-icon",
  //   },
  // },
  imports: {
    autoImport: true,
    dirs: ["./stores"],
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
      "acceptHMRUpdate",
    ],
  },
  extends: ["nuxt-seo-kit"],
  runtimeConfig: {
    public: {
      // siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "www.buyfast.com.tr",
      MAIL_USER: process.env.MAIL_USER,
      MAIL_PASSWORD: process.env.MAIL_PASSWORD,
      siteName: "Buyfast",
      siteDescription: "Welcome to buy fast!",
      // GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
      language: "tr", // prefer more explicit language codes like `en-AU` over `en`
    },
  },
  $production: {
    routeRules: {
      "/**": { isr: true },
    },
  },
  $development: {
    //
  },
  css: [
    "~/assets/_colors.scss",
    "~/assets/_variables.scss",
    "~/assets/_main.scss",
    "~/assets/_general.scss",
    "~/assets/_effects.scss",
  ],
  snackbar: {
    bottom: true,
    right: true,
    duration: 5000,
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
      ["~/", `${path.resolve(__dirname, ".")}/`],
      ["camelCase", "stringToCamelCase"], // => stringToCamelCase
      ["kebabCase", "stringToKebab"], // => stringToKebab
      ["isDate", "isLodashDate"], // => _isLodashDate
    ],
  },
  googleFonts: {
    families: {
      Roboto: true,
      Inter: [400, 700],
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
  },
});
