import { Vue as _Vue } from 'vue/types/vue'
import { VueModule } from 'vue-modules'
import VueRouter from 'vue-router'
import { homeRoutes } from './router'
import { Store } from 'vuex'
import { homeStore } from './store'
import { AppContainer, TYPES  } from 'src/motel/domain/di-container'
import { ChecklistsDefaultGetInteractor } from 'src/motel/checklist/interactor/ChecklistsDefaultGetInteractor'
import { SET_DEFAULT_CHECKLISTS } from './store/action-types'

export class HomeModule implements VueModule {
  readonly name = 'home'
  constructor(private router: VueRouter, private store: Store<any>, private diContainer : AppContainer ) {}

  async install(Vue: typeof _Vue) {
    this.router.addRoutes(homeRoutes)
    this.store.registerModule([this.name], homeStore)

    // init data in store
    const service = this.diContainer.get<ChecklistsDefaultGetInteractor>(TYPES.ChecklistsDefaultGetInteractor)
    const data = await service.execute();
    this.store.dispatch(`${this.name}/${SET_DEFAULT_CHECKLISTS}`, data)
  }
}