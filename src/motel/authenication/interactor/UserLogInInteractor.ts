import { inject, injectable, TYPES } from "src/motel/shared/domain/di-container";
import { Authentifier, LogInAttempt } from "../domain/Authentifier";

@injectable()
export class UserLogInInteractor {
    constructor( 
        @inject(TYPES.Authentifier) 
        private authentifier : Authentifier
    ) {}

    execute(logInAttempt: LogInAttempt) : Promise<boolean>{
        return this.authentifier.logIn(logInAttempt)
    }
}