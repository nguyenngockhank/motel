import { AppContainer , TYPES } from "../domain/di-container";
var container = new AppContainer ();

export { container };
export default container;


import { ChecklistsDefaultGetInteractor } from "../checklist/interactor/ChecklistsDefaultGetInteractor";
import { ChecklistRepository } from "../checklist/domain/Checklist";
import { ChecklistRepositoryImpl } from "../checklist/infra/ChecklistRepositoryImpl";

container.bind<ChecklistRepository>(TYPES.ChecklistRepository).to(ChecklistRepositoryImpl)
container.bind<ChecklistsDefaultGetInteractor>(TYPES.ChecklistsDefaultGetInteractor).to(ChecklistsDefaultGetInteractor)


import { MotelSetting } from "../motel/domain/MotelSetting";
import { MotelInitInteractor } from "../motel/interactor/MotelInitInteractor";
import { LocalStorageMotelSetting } from "../motel/infra/LocalStorageMotelSetting";

container.bind<MotelSetting>(TYPES.MotelSetting).to(LocalStorageMotelSetting)
container.bind<MotelInitInteractor>(TYPES.InitMotelInteractor).to(MotelInitInteractor)

