import { Vue as _Vue } from 'vue/types/vue'
import { VueModule } from 'vue-modules'
import VueRouter from 'vue-router'
import { homeRoutes } from './router'
import { Store } from 'vuex'
import { homeStore } from './store'
import { LOAD_CHECKLIST_OPTIONS } from './store/action-types'

export class HomeModule implements VueModule {
  readonly name = 'home'
  constructor(private router: VueRouter, private store: Store<any> ) {}

  async install(Vue: typeof _Vue) {
    this.router.addRoutes(homeRoutes)
    this.store.registerModule([this.name], homeStore)
    await this.store.dispatch(`${this.name}/${LOAD_CHECKLIST_OPTIONS}`)
  }
}