import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { BonfireStoreService } from './bonfire-store.service';
export declare namespace BonfireStore {
    type ValueOf<T> = T[keyof T];
    type ErrorType = 'SERVICE_NOT_FOUND' | 'LOCAL_STORE_NOT_FOUND';
    type FromStore<T = any> = Observable<T> | T | any;
    type ServiceTuple<T = any, J = any> = [string, BonfireStoreService<T, J>];
    interface Config<T = any> {
        [key: string]: T;
    }
    const BONFIRE_CONFIG: InjectionToken<Config<any>>;
    class Store<T> {
        name?: string;
        store: T;
        private store$;
        constructor(initialValue: T, name?: string);
        get$(key?: keyof T, callback?: (value: BonfireStore.ValueOf<T>) => void): Observable<BonfireStore.ValueOf<T>>;
        set$<J = any>(key: keyof T, value: J): void;
        _get(key: keyof T): T[keyof T];
    }
    interface SubStores<J = any> {
        [key: string]: Store<J>;
    }
}
