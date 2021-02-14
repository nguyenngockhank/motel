import { User } from "./User";

export interface UserRepository {
    getByUsername(username: string) : Promise<User | null>;
    checkPassword(username: string, password: string) : Promise<boolean>;
}