import { hasSession } from "./session";

export interface LoginState {
    isLogin: boolean
}

export const initialState: LoginState = {
    isLogin: hasSession(),
}