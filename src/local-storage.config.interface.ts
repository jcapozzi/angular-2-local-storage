import { InjectionToken } from '@angular/core';

import { INotifyOptions } from './notify-options.interface';

export const LOCAL_STORAGE_SERVICE_CONFIG = new InjectionToken<ILocalStorageServiceConfig>( 'LOCAL_STORAGE_SERVICE_CONFIG' );

export interface ILocalStorageServiceConfig {
    // Properties:
    notifyOptions?: INotifyOptions;
    prefix?: string;
    storageType?: 'sessionStorage' | 'localStorage';
}
