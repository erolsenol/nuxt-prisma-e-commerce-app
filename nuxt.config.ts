// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  nitro: {
    prerender: {
      routes: ['/404.html'
        , '/500.html'
      ]
    }
  },
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
    "@vee-validate/nuxt",
    "@pinia/nuxt",
    "nuxt-bootstrap-icons",
  ],
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
  generate: { fallback: true },
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
  // head() {
  //   const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
  //   return {
  //     htmlAttrs: {
  //       myAttribute: 'My Value',
  //       ...i18nHead.htmlAttrs
  //     },
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: 'My Custom Description'
  //       },
  //       ...i18nHead.meta
  //     ],
  //     link: [
  //       {
  //         hid: 'apple-touch-icon',
  //         rel: 'apple-touch-icon',
  //         sizes: '180x180',
  //         href: '/apple-touch-icon.png'
  //       },
  //       ...i18nHead.link
  //     ]
  //   }
  // },
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
    locales: ["en", "tr"],
    defaultLocale: "tr",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }
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
