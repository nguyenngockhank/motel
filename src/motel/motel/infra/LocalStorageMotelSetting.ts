import { injectable } from "src/motel/shared/domain/di-container";
import { AppLocalStorage } from "src/motel/shared/infra/AppLocalStorage";
import { Motel } from "../domain/Motel";
import { MotelCreateInput, MotelSetting } from "../domain/MotelSetting";

@injectable()
export class LocalStorageMotelSetting implements MotelSetting {
  private storage: AppLocalStorage;

  constructor() {
    this.storage = new AppLocalStorage("TroCuaTui");
  }

  async create(input: MotelCreateInput): Promise<void> {
    this.storage.setItem("MotelInfo", input);
  }

  async load(): Promise<Motel | null> {
    return this.storage.getItem<Motel>("MotelInfo");
  }
}
