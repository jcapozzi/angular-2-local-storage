import { InjectionToken } from '@angular/core';
import { INotifyOptions } from './notify-options.interface';
export declare const LOCAL_STORAGE_SERVICE_CONFIG: InjectionToken<ILocalStorageServiceConfig>;
export interface ILocalStorageServiceConfig {
    notifyOptions?: INotifyOptions;
    prefix?: string;
    storageType?: 'sessionStorage' | 'localStorage';
}
