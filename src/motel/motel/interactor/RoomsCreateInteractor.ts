import { inject, injectable, TYPES } from "src/motel/shared/domain/di-container";
import { Motel } from "../domain/Motel";
import { Room } from "../domain/Room";
import { RoomRepository } from "../domain/RoomRepository";


type RoomsCreateRequest = {
    motel: Motel;
}


@injectable()
export class RoomsCreateInteractor {

    constructor(
        @inject(TYPES.RoomRepository) 
        private roomRepository: RoomRepository,
    ) {}

    execute(request: RoomsCreateRequest) : Promise<Room[]> {
        return this.roomRepository.createList(request.motel);
    }
}