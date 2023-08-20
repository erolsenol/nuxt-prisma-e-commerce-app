import { fileToBase64, replaceTurkishCharacters } from "../helper"

export default defineNuxtPlugin(() => {
  return {
    provide: {
      helper: {
        fileToBase64,
        replaceTurkishCharacters
      }
    }
  }
})