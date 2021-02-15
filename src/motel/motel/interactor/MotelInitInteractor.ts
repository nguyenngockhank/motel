import { inject, injectable, TYPES } from "src/motel/shared/domain/di-container";
import { MotelCreateInput, MotelSetting } from "../domain/MotelSetting";

export type InitRequest = MotelCreateInput;

@injectable()
export class MotelInitInteractor {

    constructor(@inject(TYPES.MotelSetting) private motelSetting: MotelSetting) {}

    execute(request: InitRequest) : Promise<void> {
        return this.motelSetting.create(request);
    }
}