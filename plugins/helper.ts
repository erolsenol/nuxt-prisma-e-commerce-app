export default defineNuxtPlugin({
    name: 'helper',
    parallel: true,
    enforce: 'pre', // or 'post'
    async setup (nuxtApp) {
      // this is the equivalent of a normal functional plugin
    },
    hooks: {
      // You can directly register Nuxt app hooks here
      'app:created'() {
        const nuxtApp = useNuxtApp()
        // 
      }
    }
  })
  