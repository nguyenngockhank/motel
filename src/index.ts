// @ts-ignore
__webpack_public_path__ = (window as any).assetUrl || '';
import "reflect-metadata"
import Vue from "vue"
import { CoreModule, RouterModule, StoreModule } from "./modules/core"

import { HomeModule } from "./modules/home" 
import { LoginModule } from "./modules/login"
import { RoomModule } from "./modules/room"

async function bootstrap() {
  Vue.config.productionTip = false

  const routerModule = new RouterModule()
  routerModule.install(Vue)

  const storeModule = new StoreModule()
  storeModule.install(Vue)

 
  const coreModule = new CoreModule(routerModule.router!, storeModule.store!)
  coreModule.install(Vue)
  new LoginModule(routerModule.router!, storeModule.store!).install(Vue)
  new HomeModule(routerModule.router!, storeModule.store!).install(Vue)
  new RoomModule(routerModule.router!, storeModule.store!).install(Vue)

  await coreModule.setUpNavigationGuards()
}

bootstrap()