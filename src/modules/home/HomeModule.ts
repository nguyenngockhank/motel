import { Vue as _Vue } from 'vue/types/vue'
import { homeRoutes } from './routes'
import { homeStore } from './store'
import { BaseModule } from '../core/baseModule'

export class HomeModule extends BaseModule  {
  readonly name = 'home'

  install(Vue: typeof _Vue) {
    this.router.addRoutes(homeRoutes)
    this.store.registerModule([this.name], homeStore)
  }
}