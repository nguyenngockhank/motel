// @ts-ignore
__webpack_public_path__ = (window as any).assetUrl || '';
import "reflect-metadata"
import Vue from "vue"
import { CoreModule, RouterModule, StoreModule } from "./ui/core"

import { HomeModule } from "./ui/home" 
import { LoginModule } from "./ui/login"
import { RoomModule } from "./ui/room"

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