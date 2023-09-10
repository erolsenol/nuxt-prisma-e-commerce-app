export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Middleware productDetail', to.params.name)
    useState('routeParamName', () => to.params.name)
  })
  