import locales from "./locales";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "tr",
  fallbackLocale: 'tr',
  messages: {
    ...locales
  },
}));
