import { Observable } from 'rxjs';
import { ILocalStorageEvent } from './local-storage-events.interface';
import { ILocalStorageServiceConfig } from './local-storage.config.interface';
export declare class LocalStorageService {
    isSupported: boolean;
    errors$: Observable<string>;
    removeItems$: Observable<ILocalStorageEvent>;
    setItems$: Observable<ILocalStorageEvent>;
    warnings$: Observable<string>;
    private notifyOptions;
    private prefix;
    private storageType;
    private webStorage;
    private errors;
    private removeItems;
    private setItems;
    private warnings;
    constructor(config: ILocalStorageServiceConfig);
    add(key: string, value: any): boolean;
    clearAll(regularExpression?: string): boolean;
    deriveKey(key: string): string;
    get<T>(key: string): T;
    getStorageType(): string;
    keys(): Array<string>;
    length(): number;
    remove(...keys: Array<string>): boolean;
    set(key: string, value: any): boolean;
    private checkSupport;
    private setPrefix;
    private setStorageType;
    private setNotify;
}
