import { RouteConfig } from "vue-router";
import RentingPage from "./components/renting/RentingPage.vue";

export const roomRoutes: RouteConfig[] = [
  {
    path: "/rooms/:id/renting",
    name: "RoomRenting",
    component: RentingPage,
  },
];
