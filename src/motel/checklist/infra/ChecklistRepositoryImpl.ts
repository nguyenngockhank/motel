import { injectable } from "src/motel/domain/di-container";
import { ChecklistItem, ChecklistRepository } from "../domain/Checklist";
import { CHECKLISTS } from "./checklists";

@injectable()
export class ChecklistRepositoryImpl implements ChecklistRepository {
    async getDefaultChecklists(): Promise<Record<string, ChecklistItem[]>>{
        return CHECKLISTS;
    }
}