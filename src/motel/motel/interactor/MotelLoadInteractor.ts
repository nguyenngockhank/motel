import { inject, injectable, TYPES } from "src/motel/shared/domain/di-container";
import { Motel } from "../domain/Motel";
import { MotelSetting } from "../domain/MotelSetting";
import { RoomRepository } from "../domain/RoomRepository";


export type MotelInfo = {
    motel: Motel,
    rooms: Room[],
}

@injectable()
export class MotelLoadInteractor {

    constructor(
        @inject(TYPES.MotelSetting) 
        private motelSetting: MotelSetting,
        @inject(TYPES.RoomRepository)
        private roomRepository: RoomRepository,
    ) {}

    async execute() : Promise<MotelInfo | null> {
        const motel = await this.motelSetting.load()
        if (!motel) {
            return null
        }

        const rooms = await this.roomRepository.getAll()

        return {
            motel,
            rooms,
        }
    }
}