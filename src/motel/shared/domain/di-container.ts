import { Container, injectable, inject } from "inversify";

export { injectable, inject };

export {
    Container as AppContainer 
}

export const TYPES = {
    // shared
    AppIndexedDB: 'AppIndexedDB',

    // authenication
    Authentifier: 'Authentifier',
    UserRepository: 'UserRepository',
    UserLogInInteractor: 'UserLogInInteractor',
    UserHasSessionInteractor: 'UserHasSessionInteractor',

    // checklist
    ChecklistsDefaultGetInteractor: 'ChecklistsDefaultGetInteractor',
    ChecklistRepository: 'ChecklistRepository',

    // motel
    MotelSetting: 'MotelSetting',
    MotelInitInteractor: 'InitMotelInteractor',
    MotelLoadInteractor: 'LoadMotelInteractor',
    
    // rooms
    RoomRepository: 'RoomRepository',
    RoomsCreateInteractor: 'RoomsCreateInteractor',

    // payment
    PaymentCalculator: 'PaymentCalculator',
    PaymentInfoCalculateInteractor: 'PaymentInfoCalculateInteractor',
    
}
