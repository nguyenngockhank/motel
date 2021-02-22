import { ActionContext as VueXActContext } from "vuex";
import { HomeGetters } from "./getters";
import { HomeState } from "./state";

export type ActionContext = Omit<VueXActContext<HomeState, null>, "getters"> & {
  getters: HomeGetters;
};

export enum ActionTypes {
  LOAD_CHECKLIST_OPTIONS = "loadChecklistOptions",
  LOAD_MOTEL = "loadMotel",
  INIT_MOTEL = "initMotel",
}

export enum MutationTypes {
  SET_MOTEL_INFO = "setMotelInfo",
  SET_ROOMS = "setRooms",
  SET_CHECKLIST_OPTIONS = "setChecklistOptions",
}

export type InitMotelPayload = {
  motel: {
    name: string;
    slogan: string;
    numberOfRooms: number;
    priceOfRoom: number;
  };
  checklists: Record<string, string[]>;
};
