import createRoutes from './libs/awesome-react-router/createRoutes'
import View from './views/View'

export default createRoutes([
  {
    name: 'a',
    path: 'a',
    component: View,
    routes: [
      {
        name: 'aa',
        path: 'aa',
        component: View
      },
      {
        name: 'ab',
        path: 'ab',
        component: View,
        routes: [
          {
            name: 'aba',
            path: 'aba',
            component: View
          }
        ]
      },
      {
        name: 'ac',
        path: 'ac',
        component: View
      }
    ]
  },
  {
    name: 'b',
    path: 'b',
    component: View
  },
  {
    name: 'c',
    path: 'c',
    component: View
  }
])
