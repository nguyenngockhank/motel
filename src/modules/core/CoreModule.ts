import ElementUI from 'element-ui'
import { Vue as _Vue } from 'vue/types/vue'
import 'element-ui/lib/theme-chalk/index.css'

import App from "./components/App.vue"
import { BaseModule } from './baseModule'

export class CoreModule extends BaseModule {
  readonly name = 'core'

  private get isAuthenticated() {
    if (!this.store.state.login) {
      return false;
    }
    return this.store.state.login.isLogin;
  }
  
  install(Vue: typeof _Vue) {
    Vue.use(ElementUI)
    Vue.prototype.$eventBus = new Vue()
    
    // set up Navigation Guards
    this.router.beforeEach((to, from, next) => {
      if (to.name !== 'Login' && !this.isAuthenticated) {
        next({ name: 'Login' })
      } else {
        next()
      } 
    })

    // render component
    new Vue({
      router: this.router,
      store: this.store,
      el: '#app',
      render: h => h(App),
    })
    
  }
}