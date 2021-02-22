import { RouteConfig } from "vue-router";
import Login from "./components/Login.vue";

export const loginRoutes: RouteConfig[] = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
];
