import { Vue as _Vue } from 'vue/types/vue'
import { VueModule } from 'vue-modules'
import VueRouter from 'vue-router'
import { Store } from 'vuex'

export abstract class BaseModule implements VueModule {
    readonly name: string
    constructor(protected router: VueRouter, protected store: Store<any>) {}
    install(Vue: typeof _Vue) {}
}