import locales from "./locales";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "tr",
  messages: {
    ...locales
  },
}));
