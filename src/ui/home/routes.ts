import { RouteConfig } from "vue-router";
import HomePage from "./components/HomePage.vue";

export const homeRoutes: RouteConfig[] = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
];
