import { inject, injectable, TYPES } from "src/motel/shared/domain/di-container";
import { UserRepository } from "./UserRepository";

export type LogInAttempt  ={
    username: string;
    password: string;
}

@injectable()
export abstract class Authentifier {
    constructor(
        @inject(TYPES.UserRepository) 
        private userRepository: UserRepository,
    ) { }

    async logIn(attempt: LogInAttempt): Promise<boolean> {
        if (await this.isLoggedIn()) {
            return true;
        }

        const matchPass = await this.userRepository.checkPassword(attempt.username, attempt.password);
        if (!matchPass) {
            return false
        } 
        
        await this.persistSession(attempt)
        return true
    }

    abstract isLoggedIn(): Promise<boolean>;
    
    abstract persistSession(attempt: LogInAttempt) : Promise<void>;

    abstract logOut() : Promise<void>;
}