import { MotelRepo } from "../domain/motel/MotelRepo";
import { MotelNameExistsException } from "../domain/motel/MotelNameExistsException";
import { Motel } from "../domain/motel/Motel";

export class InitMotel {

    constructor(private motelRepo: MotelRepo) {}

    execute(request: InitRequest) : void {
        if (this.checkMotelExists(request.name)) {
            throw new MotelNameExistsException; 
        }

        let motel : Motel = new Motel(request.name, request.numberOfRooms);
        return this.motelRepo.create(motel);
    }

    private checkMotelExists(name: string) : boolean {
        let motel = this.motelRepo.findByName(name);
        return motel != null;
    }
}

export interface InitRequest {
    readonly name: string,
    readonly numberOfRooms: number,
}
