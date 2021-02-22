import { inject, injectable, TYPES } from "src/motel/shared/domain/di-container";
import { ChecklistItem, ChecklistRepository } from "../domain/Checklist";

@injectable()
export class ChecklistsDefaultGetInteractor {
  constructor(
    @inject(TYPES.ChecklistRepository)
    private checklistRepo: ChecklistRepository,
  ) {}

  execute(): Promise<Record<string, ChecklistItem[]>> {
    return this.checklistRepo.getDefaultChecklists();
  }
}
