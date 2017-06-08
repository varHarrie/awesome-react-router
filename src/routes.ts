import View from './views/View'

export default [
  {
    name: 'products',
    path: '/products',
    component: View,
    routes: [
      {
        name: 'product',
        path: '/:productId',
        component: View
      }
    ]
  },
  {
    name: 'organization',
    path: '/organization',
    component: View,
    routes: [
      {
        name: 'menbers',
        path: '/menbers',
        component: View,
        routes: [
          {
            name: 'member',
            path: ':memberId',
            component: View
          }
        ]
      }
    ]
  }
]
