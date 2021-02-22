import { AppContainer, TYPES } from "../domain/di-container";

// -- shared
import { AppIndexedDB } from "./IndexedDb/AppIndexedDB";

// --- authentication
import { Authentifier } from "../../authenication/domain/Authentifier";
import { UserRepository } from "../../authenication/domain/UserRepository";
import { MemoryUserRepository } from "../../authenication/infra/MemoryUserRepository";
import { SessionStorageAuthentifier } from "../../authenication/infra/SessionStorageAuthentifier";
import { UserLogInInteractor } from "../../authenication/interactor/UserLogInInteractor";
import { UserHasSessionInteractor } from "../../authenication/interactor/UserHasSessionInteractor";

// --- checklists
import { ChecklistsDefaultGetInteractor } from "../../checklist/interactor/ChecklistsDefaultGetInteractor";
import { ChecklistRepository } from "../../checklist/domain/Checklist";
import { ChecklistRepositoryImpl } from "../../checklist/infra/ChecklistRepositoryImpl";

// --- motel
import { MotelSetting } from "../../motel/domain/MotelSetting";
import { LocalStorageMotelSetting } from "../../motel/infra/LocalStorageMotelSetting";
import { MotelInitInteractor } from "../../motel/interactor/MotelInitInteractor";
import { MotelLoadInteractor } from "../../motel/interactor/MotelLoadInteractor";
import { RoomsCreateInteractor } from "../../motel/interactor/RoomsCreateInteractor";
import { RoomRepository } from "../../motel/domain/RoomRepository";
import { IndexedDbRoomRepository } from "../../motel/infra/IndexedDbRoomRepository";

// -- payment
import { PaymentInfoCalculateInteractor } from "../../payment/interactor/PaymentInfoCalculateInteractor";
import { PaymentCalculator } from "../../payment/domain/PaymentCalculator";

const container = new AppContainer();

export { container };
export default container;
container.bind<AppIndexedDB>(TYPES.AppIndexedDB).toConstantValue(new AppIndexedDB("TroCuaTui", 1, "TcT"));

container.bind<UserRepository>(TYPES.UserRepository).to(MemoryUserRepository);
container.bind<Authentifier>(TYPES.Authentifier).to(SessionStorageAuthentifier);
container.bind<UserLogInInteractor>(TYPES.UserLogInInteractor).to(UserLogInInteractor);
container.bind<UserHasSessionInteractor>(TYPES.UserHasSessionInteractor).to(UserHasSessionInteractor);

container.bind<ChecklistRepository>(TYPES.ChecklistRepository).to(ChecklistRepositoryImpl);
container.bind<ChecklistsDefaultGetInteractor>(TYPES.ChecklistsDefaultGetInteractor).to(ChecklistsDefaultGetInteractor);

container.bind<MotelSetting>(TYPES.MotelSetting).to(LocalStorageMotelSetting);
container.bind<MotelInitInteractor>(TYPES.MotelInitInteractor).to(MotelInitInteractor);
container.bind<MotelLoadInteractor>(TYPES.MotelLoadInteractor).to(MotelLoadInteractor);
container.bind<RoomRepository>(TYPES.RoomRepository).to(IndexedDbRoomRepository);
container.bind<RoomsCreateInteractor>(TYPES.RoomsCreateInteractor).to(RoomsCreateInteractor);

container.bind<PaymentCalculator>(TYPES.PaymentCalculator).to(PaymentCalculator);
container.bind<PaymentInfoCalculateInteractor>(TYPES.PaymentInfoCalculateInteractor).to(PaymentInfoCalculateInteractor);
