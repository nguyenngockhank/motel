import { ChecklistItem } from "src/motel/checklist/domain/Checklist";
import { Motel } from "src/motel/motel/domain/Motel";
import { Room } from "src/motel/motel/domain/Room";

export interface HomeState {
  defaultChecklists: Record<string, ChecklistItem[]>;
  isInitialized: boolean;
  motel: Partial<Motel>;
  rooms: Room[];
}

export const initialState: HomeState = {
  defaultChecklists: {},
  isInitialized: false,
  motel: {
    name: "",
    slogan: "",
    numberOfRooms: 0,
  },
  rooms: [],
};
