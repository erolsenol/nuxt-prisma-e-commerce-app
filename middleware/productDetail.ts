export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Middleware', to.params.name)
    useState('routeParamName', () => to.params.name)
  })
  