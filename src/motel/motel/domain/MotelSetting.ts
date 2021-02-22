import { Motel } from "./Motel";

export type MotelCreateInput = Motel; // TODO: use Pick instead

export interface MotelSetting {
  create(motel: MotelCreateInput): Promise<void>;

  load(): Promise<Motel | null>;
}
