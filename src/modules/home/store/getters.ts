import container from "src/motel/shared/infra/inversify.config"
import { TYPES } from "src/motel/shared/domain/di-container"
import { MotelInitInteractor } from "src/motel/motel/interactor/MotelInitInteractor"
import { ChecklistsDefaultGetInteractor } from "src/motel/checklist/interactor/ChecklistsDefaultGetInteractor"
import { MotelLoadInteractor } from "src/motel/motel/interactor/MotelLoadInteractor"
import { RoomsCreateInteractor } from "src/motel/motel/interactor/RoomsCreateInteractor"

export type HomeGetters = {
    getChecklistsDefaultInteractor: ChecklistsDefaultGetInteractor;
    initMotelInteractor: MotelInitInteractor;
    loadMotelInteractor: MotelLoadInteractor;
    createRoomsInteractor: RoomsCreateInteractor;
}

export const getters = {
    getChecklistsDefaultInteractor: () : ChecklistsDefaultGetInteractor =>    {
        return container.get<ChecklistsDefaultGetInteractor>(TYPES.ChecklistsDefaultGetInteractor)
    },
    initMotelInteractor: () : MotelInitInteractor =>   {
        return container.get<MotelInitInteractor>(TYPES.MotelInitInteractor)
    },
    loadMotelInteractor: () : MotelLoadInteractor =>   {
        return container.get<MotelLoadInteractor>(TYPES.MotelLoadInteractor)
    },
    createRoomsInteractor: () : RoomsCreateInteractor => {
        return container.get<RoomsCreateInteractor>(TYPES.RoomsCreateInteractor)
    }
}
