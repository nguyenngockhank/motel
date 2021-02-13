export class AppLocalStorage {
    constructor(private prefix: string) {}

    private privateKey(key: string) {
        return this.prefix + '__' + key;
    }

    setItem<T>(key: string, value: T): void {
        const privateKey =  this.privateKey(key)
        localStorage.setItem(privateKey, JSON.stringify(value))
    }
    
    getItem<T>(key: string, rawValue = false): T | string | null {
        const privateKey = this.privateKey(key);
        const value = localStorage.getItem(privateKey)
        if (rawValue) {
            return value; // type string or null
        }
        return !value ? null : JSON.parse(value);
    }
    
}