export class AppObjectStore {
    constructor(private dbInstance : IDBDatabase, private objectName: string) {}

    private getObjectStore() : IDBObjectStore {
        const tranaction = this.dbInstance.transaction([ this.objectName], 'readwrite')
        return tranaction.objectStore(this.objectName)
    }

    add<T>(objData: T) : Promise<void> {
        const objectStore = this.getObjectStore()
        return new Promise((resolve, reject) => {
            const request = objectStore.add(objData)
            request.onsuccess = event => resolve()
            request.onerror = event => reject(event)
        });
    }

    put<T>(objData: T) : Promise<void> {
        const objectStore = this.getObjectStore()
        return new Promise((resolve, reject) => {
            const request = objectStore.put(objData)
            request.onsuccess = event => resolve()
            request.onerror = event => reject(event)
        });
    }

    remove<T extends { id: string }>(objData: T | string) : Promise<void> {
        let id = typeof objData === 'string' ? objData : objData.id
        const objectStore = this.getObjectStore()

        return new Promise((resolve, reject) => {
            const request = objectStore.delete(id)
            request.onsuccess = event => resolve()
            request.onerror = event => reject(event)
        });
    }

    read<T>(objId: string) : Promise<T | null> {
        let objectStore =  this.dbInstance.transaction(this.objectName).objectStore(this.objectName)

        return new Promise((resolve, reject) => {
            const request = objectStore.get(objId)
            request.onsuccess = event => {
                resolve(request.result)
            }
            request.onerror = event => reject(event)
        });
    }

    readAll<T>() : Promise<T[]> {
        let objectStore =  this.dbInstance.transaction(this.objectName).objectStore(this.objectName)


        return new Promise((resolve, reject) => {
            const request = objectStore.getAll()

            request.onsuccess = event => {
                resolve(request.result)
            }
            request.onerror = event => reject(event)
        });
    }
}