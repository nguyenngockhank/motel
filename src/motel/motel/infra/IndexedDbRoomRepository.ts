import { TYPES, inject, injectable } from "src/motel/shared/domain/di-container";
import { AppIndexedDB } from "src/motel/shared/infra/IndexedDb/AppIndexedDB";
import { AppObjectStore } from "src/motel/shared/infra/IndexedDb/AppObjectStore";
import { Room } from "../domain/Room";
import { RoomRepository } from "../domain/RoomRepository";

@injectable()
export class IndexedDbRoomRepository extends RoomRepository {

    constructor(
        @inject(TYPES.AppIndexedDB)
        private appIndexedDB: AppIndexedDB
    ) { 
        super()
    }

    private objectStore() : Promise<AppObjectStore> {
        return this.appIndexedDB.objectStoreWrapper('rooms')
    }

    async getAll(): Promise<Room[]> {
        const objectStore = await this.objectStore()
        const result = await objectStore.readAll<Room>()
        console.log("--- READ ALL ", result);
        return result;
    }

    async create(room: Room): Promise<void> {
        const objectStore = await this.objectStore()
        await objectStore.add(room)
    }
}