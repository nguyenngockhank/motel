import { inject, injectable, TYPES } from "src/motel/domain/di-container";
import { Authentifier } from "../domain/Authentifier";

@injectable()
export class UserHasSessionInteractor {
    constructor( 
        @inject(TYPES.Authentifier) 
        private authentifier : Authentifier
    ) {}

    execute() : Promise<boolean>{
        return this.authentifier.isLoggedIn()
    }
}