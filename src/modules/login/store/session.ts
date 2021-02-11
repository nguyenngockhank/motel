const PREFIX = '__trocuatui__'

const LOGIN_STATE = `${PREFIX}isLogin`;

export function initSession() {
    sessionStorage[LOGIN_STATE] = true
}

export function hasSession() {
    return !!sessionStorage[LOGIN_STATE]
}

export function destroySession() {
    sessionStorage[LOGIN_STATE] = undefined
}