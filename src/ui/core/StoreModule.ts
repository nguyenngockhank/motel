import { Vue as _Vue } from "vue/types/vue";
import Vuex, { Store } from "vuex";
import { VueModule } from "vue-modules";

export class StoreModule implements VueModule {
  readonly name = "store";

  store?: Store<any>;

  install(Vue: typeof _Vue) {
    Vue.use(Vuex);
    this.store = new Vuex.Store({
      state: {},
      mutations: {},
      actions: {},
    });
  }
}
