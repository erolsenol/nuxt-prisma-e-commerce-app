import { createI18n } from 'vue-i18n'

import locales from '~/locales'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'tr',
    fallbackLocale: 'tr',
    // baseUrl: 'https://www.buyfast.com.tr',
    messages: locales,
  })

  console.log("123123123 vueApp:",vueApp)

  vueApp.use(i18n)
})