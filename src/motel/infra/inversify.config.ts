import { AppContainer , TYPES } from "../domain/di-container";
var container = new AppContainer ();

export { container };
export default container;

// --- authentication
import { Authentifier } from "../authenication/domain/Authentifier";
import { UserRepository } from "../authenication/domain/UserRepository";
import { MemoryUserRepository } from "../authenication/infra/MemoryUserRepository";
import { SessionStorageAuthentifier } from "../authenication/infra/SessionStorageAuthentifier";
import { UserLogInInteractor } from "../authenication/interactor/UserLogInInteractor";
import { UserHasSessionInteractor } from "../authenication/interactor/UserHasSessionInteractor";

container.bind<UserRepository>(TYPES.UserRepository).to(MemoryUserRepository)
container.bind<Authentifier>(TYPES.Authentifier).to(SessionStorageAuthentifier)
container.bind<UserLogInInteractor>(TYPES.UserLogInInteractor).to(UserLogInInteractor)
container.bind<UserHasSessionInteractor>(TYPES.UserHasSessionInteractor).to(UserHasSessionInteractor)

// --- checklists
import { ChecklistsDefaultGetInteractor } from "../checklist/interactor/ChecklistsDefaultGetInteractor";
import { ChecklistRepository } from "../checklist/domain/Checklist";
import { ChecklistRepositoryImpl } from "../checklist/infra/ChecklistRepositoryImpl";

container.bind<ChecklistRepository>(TYPES.ChecklistRepository).to(ChecklistRepositoryImpl)
container.bind<ChecklistsDefaultGetInteractor>(TYPES.ChecklistsDefaultGetInteractor).to(ChecklistsDefaultGetInteractor)

// --- motel
import { MotelSetting } from "../motel/domain/MotelSetting";
import { LocalStorageMotelSetting } from "../motel/infra/LocalStorageMotelSetting";
import { MotelInitInteractor } from "../motel/interactor/MotelInitInteractor";
import { MotelLoadInteractor } from "../motel/interactor/MotelLoadInteractor";

container.bind<MotelSetting>(TYPES.MotelSetting).to(LocalStorageMotelSetting)
container.bind<MotelInitInteractor>(TYPES.MotelInitInteractor).to(MotelInitInteractor)
container.bind<MotelLoadInteractor>(TYPES.MotelLoadInteractor).to(MotelLoadInteractor)

