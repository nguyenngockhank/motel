/* eslint-disable class-methods-use-this */
/* eslint-disable no-await-in-loop */
import { injectable } from "inversify";
import { Motel } from "./Motel";
import { Room } from "./Room";

@injectable()
export abstract class RoomRepository {
  abstract getAll(): Promise<Room[]>;

  abstract getById(roomId: string): Promise<Room | null>;

  abstract create(room: Room): Promise<void>;

  async createList(motel: Motel): Promise<Room[]> {
    const { numberOfRooms, priceOfRoom } = motel;

    const result: Room[] = [];
    for (let i = 1; i <= numberOfRooms; ++i) {
      const roomId = this.generateId(i);
      const room: Room = {
        id: roomId,
        price: priceOfRoom,
      };
      await this.create(room);
      result.push(room);
    }
    return result;
  }

  protected generateId(roomIndex: number): string {
    return `${roomIndex}`.padStart(5, "0");
  }
}
