/**
 * Created by Cai Kang Jie on 2017/8/25.
 */
import lazyLoading from './../../store/modules/routeConfig/lazyLoading'
export default {
  name: 'Tables',
  expanded: false,
  sidebarMeta: {
    title: 'Tables',
    icon: 'ion-grid',
    order: 1
  },
  subMenu: [{
    name: 'Basic Tables',
    path: '/tables/tables',
    component: lazyLoading('tables/tables'),
    sidebarMeta: {
      title: 'Basic Tables',
      order: 100
    }
  }]
}
