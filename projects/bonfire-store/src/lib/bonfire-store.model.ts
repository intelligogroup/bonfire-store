import { WithObservable } from '@intelligogroup/bonfire';
import { InjectionToken } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BonfireStoreService } from './bonfire-store.service';


// tslint:disable-next-line: no-namespace
export namespace BonfireStore {
  export type ValueOf<T> = T[keyof T];

  export type ErrorType = 'SERVICE_NOT_FOUND' | 'LOCAL_STORE_NOT_FOUND';

  export type FromStore<T = any> = Observable<T> | T;

  export type LocalStore<T extends {}, J = any> = T & {
    store?: T;
    get$?: (key?: keyof T, callback?: (value: BonfireStore.ValueOf<T>) => void) => Observable<T>;
    set$?: (key: keyof T, value: J) => void;
  };


  export type ServiceTuple<T = any, J = any> = [string, BonfireStoreService<T, J>];

  export interface StoreData<T = any> {
    [key: string]: T;
  }
  export interface StoreComponent<T = StoreData> {
    createLocalStore(initialValue: T): Store<T>;
  }

  export const BONFIRE_CONFIG = new InjectionToken<StoreData>('BONFIRE_CONFIG');

  export class Store<T> {
    @WithObservable() public store: T; private store$: BehaviorSubject<T>;
    constructor(initialValue: T, public name?: string) {
      if (initialValue) {
        this.store = initialValue;
      }
    }

    get$(
      key?: keyof T,
      callback?: (value: BonfireStore.ValueOf<T>) => void
    ): Observable<BonfireStore.ValueOf<T>> {

      const mapCallback = store => key && !!store ? store[key as keyof T] : store;


      return this.store$
        .asObservable()
        .pipe(
          map(mapCallback),
          tap(callback || ((value) => { }))
        );

    }

    set$<J = any>(key: keyof T, value: J) {
      this.store[key] = value as any;
    }

    _get(key: keyof T) {
      return this.store[key];
    }
  }

  export interface SubStores<J = any> {
    [key: string]: Store<J>;
  }


}
