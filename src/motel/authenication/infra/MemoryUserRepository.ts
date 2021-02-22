import { injectable } from "inversify";
import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

@injectable()
export class MemoryUserRepository implements UserRepository {
  private users: User[];

  constructor() {
    this.users = [
      { username: "tronhakhanh", password: "hiphopneverdie" },

      { username: "tronhatam", password: "yeuemneversai" },
    ];
  }

  async getByUsername(username: string): Promise<User | null> {
    return this.users.find(user => user.username === username);
  }

  async checkPassword(username: string, password: string): Promise<boolean> {
    const user = await this.getByUsername(username);

    if (!user) {
      return false;
    }
    return user.password === password;
  }
}
