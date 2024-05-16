export class StandardStorage {
    private _memory: Record<string, unknown>;

    constructor() {
    }
    
    public addItem(key: string, value: any) {
        this._memory[key] = value;
    }
    
    public removeItem(key: string) {
        delete this._memory[key];
    }
}

export const standardStorageInstance = new StandardStorage();
