import { ActionContext, ACTION_TYPES, MUTATION_TYPES, LoginPayload } from "./action-types";


const { LOGIN, LOAD_SESSION } = ACTION_TYPES
const { SET_IS_LOGIN } = MUTATION_TYPES

var actions = {}

actions[LOGIN] = async ({ getters, commit } : ActionContext, payload : LoginPayload ) =>  {
    const isSuccess = await getters.logInInteractor.execute({
        username: payload.account,
        password: payload.password,
    })

    if (isSuccess) {
        commit(SET_IS_LOGIN, true)
    }
}


actions[LOAD_SESSION] = async ({ getters, commit }: ActionContext) => {
    const hasSession = await getters.userHasSessionInteractor.execute()

    if (hasSession) {
        commit(SET_IS_LOGIN, true)
    }
}

export { actions };
