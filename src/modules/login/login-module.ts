import { Vue as _Vue } from 'vue/types/vue'
import { VueModule } from 'vue-modules'
import VueRouter from 'vue-router'
import { loginRoutes } from './routes'
import { Store } from 'vuex'
import { loginStore } from './store'

export class LoginModule implements VueModule {
  readonly name = 'login'
  constructor(private router: VueRouter, private store: Store<any>) {}

  install(Vue: typeof _Vue) {
    this.router.addRoutes(loginRoutes)
    this.store.registerModule([this.name], loginStore)
  }
}