import App from '../App'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

export default [{
  path: '/',
  component: App, // 顶级路由，对应index.html
  children: [// 二级路由，对应App.vue
    // 重定向
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    }
  ]
}]
