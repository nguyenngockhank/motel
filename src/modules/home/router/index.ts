import { RouteConfig } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

export const homeRoutes: RouteConfig[] = [
    {
        path: '/home',
        name: 'Home',
        component: HelloWorld,
    }
]