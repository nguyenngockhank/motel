import container from "src/motel/infra/inversify.config"
import { TYPES } from "src/motel/domain/di-container"
import { MotelInitInteractor } from "src/motel/motel/interactor/MotelInitInteractor"
import { ChecklistsDefaultGetInteractor } from "src/motel/checklist/interactor/ChecklistsDefaultGetInteractor"

export const getters = {
    getChecklistsDefaultInteractor: () : ChecklistsDefaultGetInteractor =>    {
        return container.get<ChecklistsDefaultGetInteractor>(TYPES.InitMotelInteractor)
    },
    initMotelInteractor: () : MotelInitInteractor =>   {
        return container.get<MotelInitInteractor>(TYPES.InitMotelInteractor)
    },
}

export type HomeGetters = {
    getChecklistsDefaultInteractor: ChecklistsDefaultGetInteractor;
    initMotelInteractor: MotelInitInteractor;
}