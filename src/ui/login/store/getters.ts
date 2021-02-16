import container from "src/motel/shared/infra/inversify.config"
import { TYPES } from "src/motel/shared/domain/di-container"
import { UserLogInInteractor } from "src/motel/authenication/interactor/UserLogInInteractor"
import { UserHasSessionInteractor } from "src/motel/authenication/interactor/UserHasSessionInteractor"


export type LoginGetters = {
    logInInteractor: UserLogInInteractor;
    userHasSessionInteractor: UserHasSessionInteractor;
}

export const getters = {
    logInInteractor: () : UserLogInInteractor => {
        return container.get<UserLogInInteractor>(TYPES.UserLogInInteractor)
    },
    userHasSessionInteractor: ( ) : UserHasSessionInteractor => {
        return container.get<UserHasSessionInteractor>(TYPES.UserHasSessionInteractor)
    },
}
