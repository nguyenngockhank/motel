import { TYPES } from "src/motel/domain/di-container"
import container from "src/motel/infra/inversify.config"
import { InitMotelInteractor } from "src/motel/motel/interactor/InitMotelInteractor"

export const getters = {
    initMotelInteractor() : InitMotelInteractor {
        return container.get<InitMotelInteractor>(TYPES.InitMotelInteractor)
    }
}