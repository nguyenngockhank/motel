import { ActionContext, ActionTypes, MutationTypes, LoginPayload } from "./action-types";

const { LOGIN, LOAD_SESSION } = ActionTypes;
const { SET_IS_LOGIN } = MutationTypes;

const actions = {};

actions[LOGIN] = async ({ getters, commit }: ActionContext, payload: LoginPayload) => {
  const isSuccess = await getters.logInInteractor.execute({
    username: payload.account,
    password: payload.password,
  });

  if (isSuccess) {
    commit(SET_IS_LOGIN, true);
  }
};

actions[LOAD_SESSION] = async ({ getters, commit }: ActionContext) => {
  const hasSession = await getters.userHasSessionInteractor.execute();

  if (hasSession) {
    commit(SET_IS_LOGIN, true);
  }
};

export { actions };
