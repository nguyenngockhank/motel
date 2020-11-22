import { Motel } from "./Motel";

export interface MotelRepo {
    create(motel: Motel): void;
    findByName(name: string): Motel|null;
}