import { LOGIN } from "src/modules/login/store/action-types";
import { injectable } from "src/motel/domain/di-container";
import { AppLocalStorage } from "src/motel/infra/AppLocalStorage";
import { MotelCreateInput, MotelSetting } from "../domain/MotelSetting";

@injectable()
export class LocalStorageMotelSetting implements MotelSetting {
    private storage : AppLocalStorage

    constructor() {
        this.storage = new AppLocalStorage('TroCuaTui')
    }

    async create(input: MotelCreateInput): Promise<void> {
        console.log('CREATE SET ITEM TO LOCAL STORAGE', input)
        this.storage.setItem('MotelInfo', input);
    }
}