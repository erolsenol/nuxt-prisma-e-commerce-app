import {
  fileToBase64, replaceTurkishCharacters, get,
  set,
  remove
} from "../helper"

export default defineNuxtPlugin(() => {
  return {
    provide: {
      helper: {
        fileToBase64,
        replaceTurkishCharacters,
        get,
        set,
        remove
      }
    }
  }
})