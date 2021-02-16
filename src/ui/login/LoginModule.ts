import { BaseModule } from '../core/baseModule'
import { Vue as _Vue } from 'vue/types/vue'
import { loginRoutes } from './routes'
import { loginStore } from './store'

export class LoginModule extends BaseModule {
  readonly name = 'login'

  install(Vue: typeof _Vue) {
    this.router.addRoutes(loginRoutes)
    this.store.registerModule([this.name], loginStore)
  }
}