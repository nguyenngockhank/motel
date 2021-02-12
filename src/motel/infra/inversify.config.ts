import { ChecklistsDefaultGetInteractor } from "../checklist/interactor/ChecklistsDefaultGetInteractor";
import { ChecklistRepository } from "../checklist/domain/Checklist";
import { ChecklistRepositoryImpl } from "../checklist/infra/ChecklistRepositoryImpl";
import { AppContainer , TYPES } from "../domain/di-container";

var container = new AppContainer ();
container.bind<ChecklistRepository>(TYPES.ChecklistRepository).to(ChecklistRepositoryImpl);
container.bind<ChecklistsDefaultGetInteractor>(TYPES.ChecklistsDefaultGetInteractor).to(ChecklistsDefaultGetInteractor);

export { container };
export default container;