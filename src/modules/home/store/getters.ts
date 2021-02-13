import container from "src/motel/infra/inversify.config"
import { TYPES } from "src/motel/domain/di-container"
import { MotelInitInteractor } from "src/motel/motel/interactor/MotelInitInteractor"
import { ChecklistsDefaultGetInteractor } from "src/motel/checklist/interactor/ChecklistsDefaultGetInteractor"
import { MotelLoadInteractor } from "src/motel/motel/interactor/MotelLoadInteractor"

export type HomeGetters = {
    getChecklistsDefaultInteractor: ChecklistsDefaultGetInteractor;
    initMotelInteractor: MotelInitInteractor;
    loadMotelInteractor: MotelLoadInteractor;
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
}
