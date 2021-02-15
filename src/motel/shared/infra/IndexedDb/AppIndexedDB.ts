import { AppObjectStore } from "./AppObjectStore";

export class AppIndexedDB {

    private indexedDB : IDBFactory;
    private dbInstance : IDBDatabase;

    constructor(private dbName: string, private dbVersion: number, private prefix : string = 'tct') {
        const global = window as any;
        this.indexedDB = global.indexedDB || global.mozIndexedDB || global.webkitIndexedDB || global.msIndexedDB;
    }

    isAvailable() {
        return !!this.indexedDB;
    }

    async getInstance() : Promise<IDBDatabase> {
        if (this.dbInstance) {
            return this.dbInstance;
        }
        return this.init();
    }

    init() : Promise<IDBDatabase> {
        return new Promise((resolve, reject)  => {
            var request = this.indexedDB.open(this.dbName, this.dbVersion);
    
            request.onsuccess = (event) => {
                this.dbInstance = request.result;
                return resolve(this.dbInstance);
            };
    
            request.onupgradeneeded = (event) => {
                let db = request.result;
                var oldVersion = event.oldVersion;
                

                // update schema
                switch(oldVersion) {
                    case 0:
                        db.createObjectStore(`${this.prefix}_rooms`, { keyPath: 'id' });
                }
            }
        })
    }


    private objectStoreCached : Record<string, AppObjectStore> = {};

    async objectStoreWrapper(objectName: string) : Promise<AppObjectStore> {
        // cache hit
        if (this.objectStoreCached[objectName]) {
            return this.objectStoreCached[objectName]
        }

        // cache miss
        const instance = await this.getInstance()
        const realObjectName = `${this.prefix}_${objectName}`
        const result = new AppObjectStore(instance, realObjectName)

        // save to cached
        this.objectStoreCached[objectName] = result 
        return result
    }
}


