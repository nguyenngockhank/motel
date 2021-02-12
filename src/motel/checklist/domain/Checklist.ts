export type ChecklistItem = {
    value: string;
    label: string;
}


export interface ChecklistRepository {
    getDefaultChecklists() : Promise<Record<string, ChecklistItem[]>>
}