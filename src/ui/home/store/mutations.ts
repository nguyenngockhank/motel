import { ChecklistItem } from "src/motel/checklist/domain/Checklist";
import { Motel } from "src/motel/motel/domain/Motel";
import { Room } from "src/motel/motel/domain/Room";
import { MutationTypes } from "./action-types";
import { HomeState } from "./state";

const { SET_CHECKLIST_OPTIONS, SET_MOTEL_INFO, SET_ROOMS } = MutationTypes;

const mutations = {};

mutations[SET_CHECKLIST_OPTIONS] = (state: HomeState, data: Record<string, ChecklistItem[]>) => {
  state.defaultChecklists = data;
};

mutations[SET_MOTEL_INFO] = (state: HomeState, motel: Motel) => {
  state.motel.name = motel.name;
  state.motel.slogan = motel.slogan;
  state.motel.numberOfRooms = motel.numberOfRooms;
  state.isInitialized = true;
};

mutations[SET_ROOMS] = (state: HomeState, rooms: Room[]) => {
  state.rooms = rooms;
};

export { mutations };
