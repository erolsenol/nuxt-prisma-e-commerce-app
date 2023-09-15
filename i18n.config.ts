import locales from "./locales";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "tr",
  fallbackLocale: 'tr',
  // baseUrl: 'https://www.buyfast.com.tr',
  messages: locales ,
}));
