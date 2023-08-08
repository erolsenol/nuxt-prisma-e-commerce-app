export default defineNuxtPlugin(() => {
    return {
      provide: {
        assistant: (msg: string) => `Assistant ${msg}!`
      }
    }
  })