import locales from "./locales";

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'tr',
  locale: "tr",
  messages: {
    ...locales
  },
}));
