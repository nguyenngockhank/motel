import { Vue as _Vue } from 'vue/types/vue'
import { roomRoutes } from './routes'
import { roomStore } from './store'
import { BaseModule } from '../core/baseModule'

export class RoomModule extends BaseModule  {
  readonly name = 'room'

  install(Vue: typeof _Vue) {
    this.router.addRoutes(roomRoutes)
    this.store.registerModule([this.name], roomStore)
  }
}