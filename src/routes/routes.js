import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// MHW pages
import Weapon from 'src/pages/hunter/weapon.vue'
import Info from 'src/pages/hunter/Info.vue'
import Test from 'src/pages/hunter/Test.vue'
const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/hunter/Info'
  },
  {
    path: '/hunter',
    component: DashboardLayout,
    redirect: '/hunter/Info',
    children: [
      {
        path: 'info',
        name: 'Info',
        component: Info
      },
      {
        path: 'weapon',
        name: 'Weapon',
        component: Weapon
      },
      {
        path: 'test',
        name: 'Test',
        component: Test
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
