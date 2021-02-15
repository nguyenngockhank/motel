import { inject, injectable, TYPES } from "src/motel/shared/domain/di-container";
import { Motel } from "../domain/Motel";
import { MotelSetting } from "../domain/MotelSetting";


@injectable()
export class MotelLoadInteractor {

    constructor(
        @inject(TYPES.MotelSetting) 
        private motelSetting: MotelSetting,
    ) {}

    execute() : Promise<Motel | null> {
        return this.motelSetting.load()
    }
}