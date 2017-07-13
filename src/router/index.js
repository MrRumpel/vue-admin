import Vue from 'vue'
import Router from 'vue-router'
import dashboard from 'pages/dashboard/index'
import routeConfig from 'mainStore/modules/routeConfig'

Vue.use(Router)

const routes = [
  {
    name: 'home',
    path: '/',
    component: dashboard
  },
  {
    path: '*',
    redirect: '/'
  },
  ...generateRoutesFromRouteConfig(routeConfig.state.items)
]

export default new Router({
  routes: routes
})

function generateRoutesFromRouteConfig (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
  }
  return routes
}
