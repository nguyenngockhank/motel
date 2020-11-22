export class Motel {

    constructor(private _name: string, private _noOfRooms: number = 10) {
    }

    get name() {
        return this._name
    }

    get numberOfRooms() {
        return this._noOfRooms 
    }
}