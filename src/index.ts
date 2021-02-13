// @ts-ignore
__webpack_public_path__ = (window as any).assetUrl || '';
import "reflect-metadata"
import Vue from "vue"
import { CoreModule, RouterModule, StoreModule } from "./modules/core"

import { HomeModule } from "./modules/home" 
import { AboutModule } from "./modules/about"
import { LoginModule } from "./modules/login"

async function bootstrap() {
  Vue.config.productionTip = false

  const routerModule = new RouterModule()
  routerModule.install(Vue)

  const storeModule = new StoreModule()
  storeModule.install(Vue)

  new CoreModule(routerModule.router!, storeModule.store!).install(Vue)
  new LoginModule(routerModule.router!, storeModule.store!).install(Vue)
  await new HomeModule(routerModule.router!, storeModule.store!).install(Vue)
  new AboutModule(routerModule.router!, storeModule.store!).install(Vue)
}

bootstrap()