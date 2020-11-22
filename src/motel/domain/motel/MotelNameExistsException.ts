export class MotelNameExistsException extends Error {
    constructor(m: string = "Motel Name Exists") {
        super(m);
    }
}