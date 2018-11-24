import Home from './containers/Home'
import Translation from './containers/Translation'
import NotFound from './containers/NotFound'
import App from './app'

export default [{
  path: '/',
  component: App,
  // loadData: () => App.loadData,
  loadData: App.loadData,
  routes: [
    {
      path: '/',
      component: Home,
      exact: true,
      // loadData: () => Home.loadData,
      loadData: Home.loadData,
      key: 'home'
    },
    {
      path: '/translation',
      component: Translation,
      exact: true,
      // loadData: () => Translation.loadData,
      loadData: Translation.loadData,
      key: 'translation'
    },
    {
      component: NotFound
    }
  ]
}]