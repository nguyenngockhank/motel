import { Container, injectable, inject } from "inversify";

export { injectable, inject };

export {
    Container as AppContainer 
}

export const TYPES = {
    // checklist
    ChecklistsDefaultGetInteractor: 'ChecklistsDefaultGetInteractor',
    ChecklistRepository: 'ChecklistRepository',

    // motel
    MotelSetting: 'MotelSetting',
    MotelInitInteractor: 'InitMotelInteractor',
    MotelLoadInteractor: 'LoadMotelInteractor',
    
}
