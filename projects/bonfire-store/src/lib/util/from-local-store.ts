import { BonfireStore } from '../bonfire-store.model';
import { BonfireStoreService } from '../bonfire-store.service';
import handleErrors from './handle-error';

export default function FromLocalStore<J = any, T = any>(keyName?: keyof T | any) {

  return (target: any, key: keyof T) => {
    const init = function (isGet: boolean) {
      return function (newVal?) {
        const localStore = Object
          .values(this)
          .find(value => value instanceof BonfireStore.Store &&
            !(value instanceof BonfireStoreService)) as unknown as BonfireStore.Store<T>;

        if (!localStore) {
          handleErrors('LOCAL_STORE_NOT_FOUND');
        }

        Object.defineProperty(this, key, {
          get: () => {
            return localStore.get$(keyName);
          },
          set: (val: T) => {
            localStore.set$(keyName, val);
          },
          enumerable: true,
          configurable: true
        });

        if (isGet) {
          return this[key]; // get
        } else {
          this[key] = newVal; // set
        }
      };
    };

    return Object.defineProperty(target, key, {
      get: init(true),
      set: init(false),
      enumerable: true,
      configurable: true
    });
  };
}
