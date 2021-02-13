import { LOGIN } from "src/modules/login/store/action-types";
import { injectable } from "src/motel/domain/di-container";
import { AppLocalStorage } from "src/motel/infra/AppLocalStorage";
import { Motel } from "../domain/Motel";
import { MotelCreateInput, MotelSetting } from "../domain/MotelSetting";

@injectable()
export class LocalStorageMotelSetting implements MotelSetting {
    private storage : AppLocalStorage

    constructor() {
        this.storage = new AppLocalStorage('TroCuaTui')
    }

    async create(input: MotelCreateInput): Promise<void> {
        this.storage.setItem('MotelInfo', input)
    }

    async load(): Promise<Motel | null> {
        return this.storage.getItem<Motel>('MotelInfo')
    }
}