/* eslint-disable no-new */
import ElementUI from "element-ui";
import { Vue as _Vue } from "vue/types/vue";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en";

import App from "./components/App.vue";
import { BaseModule } from "./baseModule";
import { ACTION_TYPES as LOGIN_ACTION_TYPES } from "../login/store";
import { ACTION_TYPES as HOME_ACTION_TYPES } from "../home/store";

export class CoreModule extends BaseModule {
  readonly name = "core";

  install(Vue: typeof _Vue) {
    Vue.use(ElementUI, { locale });

    Vue.prototype.$eventBus = new Vue();

    Vue.filter("vnd", (value: number | string) => {
      const money = typeof value === "string" ? parseInt(value, 10) : value;
      if (Number.isNaN(money)) {
        return "-";
      }

      return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(money);
    });

    // render component
    new Vue({
      router: this.router,
      store: this.store,
      el: "#app",
      render: h => h(App),
    });
  }

  private isAuthenticated() {
    const rootState = this.store.state;
    if (!rootState.login) {
      return false;
    }
    return rootState.login.isLogin;
  }

  async setUpNavigationGuards(): Promise<void> {
    await this.store.dispatch(`login/${LOGIN_ACTION_TYPES.LOAD_SESSION}`);

    if (this.isAuthenticated()) {
      await this.store.dispatch(`home/${HOME_ACTION_TYPES.LOAD_MOTEL}`);
    }

    this.router.beforeEach((to, from, next) => {
      if (to.name !== "Login" && !this.isAuthenticated()) {
        next({ name: "Login" });
      } else {
        next();
      }
    });
  }
}
