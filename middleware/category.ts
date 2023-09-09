export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Middleware', to.query.id)
    useState('routeQueryId', () => to.query.id)
  })
  