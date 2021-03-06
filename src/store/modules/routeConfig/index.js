/**
 * Created by Cai Kang Jie on 2017/7/13.
 */
import lazyLoading from './lazyLoading'
import * as types from '../../mutation-types'
import ui from '../../../pages/ui'
import form from '../../../pages/form'
import tables from '../../../pages/tables'
import http from '../../../pages/httpClient'
const state = {
  items: [
    {
      name: 'Dashboard',
      path: '/',
      component: lazyLoading('dashboard', true),
      sidebarMeta: {
        title: 'dashboard',
        icon: 'ion-android-home',
        order: 0
      }
    },
    {
      name: 'Components',
      path: '/ccc',
      component: lazyLoading('dashboard2', true),
      expanded: false,
      sidebarMeta: {
        title: 'Components',
        icon: 'ion-gear-a',
        order: 100
      },
      subMenu: [
        {
          name: 'cccc',
          path: '/cccc',
          component: lazyLoading('dashboard2', true),
          sidebarMeta: {
            title: 'ccccc',
            order: 1
          }
        },
        {
          name: 'Components2',
          path: '/ccc/subMenu',
          component: lazyLoading('dashboard', true),
          expanded: false,
          sidebarMeta: {
            title: 'Components2',
            order: 1
          },
          subMenu: [
            {
              name: 'Components23',
              path: '/ccc/subMenu/a',
              component: lazyLoading('dashboard2', true),
              sidebarMeta: {
                title: 'Components23',
                order: 1
              }
            }
          ]
        }
      ]
    },
    ui,
    form,
    tables,
    http
  ]
}
const mutations = {
  [types.EXPAND_MENU] (state, config) {
    console.log(config)
    if (config.hasOwnProperty('subIndex')) {
      console.log('subMenu check')
      state.items[config.index].subMenu[config.subIndex].expanded = config.expanded
    } else {
      state.items[config.index].expanded = config.expanded
    }
  }
}
export default {
  state,
  mutations
}
