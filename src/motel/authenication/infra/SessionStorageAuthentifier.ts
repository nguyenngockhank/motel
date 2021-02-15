import { injectable } from "src/motel/shared/domain/di-container";
import { Authentifier, LogInAttempt } from "../domain/Authentifier";

const PREFIX = '__trocuatui__'
const LOGIN_STATE = `${PREFIX}isLogin`

@injectable()
export class SessionStorageAuthentifier extends Authentifier {

    async isLoggedIn(): Promise<boolean> {
        return !!sessionStorage[LOGIN_STATE]
    }

    async persistSession(attempt: LogInAttempt): Promise<void> {
        sessionStorage[LOGIN_STATE] = true
    }
    
    async logOut(): Promise<void> {
        sessionStorage[LOGIN_STATE] = undefined
    }
}