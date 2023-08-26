import qs from "qs"

export default defineNuxtPlugin(() => {
  return {
    provide: {
      qs: () => qs
    }
  }
})

export { qs }