import { BonfireStoreService } from '../bonfire-store.service';
import handleErrors from './handle-error';

export default function LocalStore<T = any>() {
  return function (target: any, key: string) {
    const saverKey = `__${key}__$saverKey$$`;

    const init = function (isGet: boolean) {
      return function (newVal?) {
        const bonfireService = Object
          .values(this)
          .find((value): boolean => value instanceof BonfireStoreService) as unknown as BonfireStoreService<any, T>;

        if (!bonfireService) {
          handleErrors('SERVICE_NOT_FOUND');
        }


        Object.defineProperty(this, key, {
          get: () => {
            if (this[saverKey]) {
              return this[saverKey];
            } else {
              return null;
            }
          },
          set: (val: T) => {
            this[saverKey] = bonfireService.createLocalStore(val);
          },
          enumerable: true,
          configurable: true
        });

        if (isGet) {
          return this[key]; // get
        } else {
          this[key] = newVal; // set
        }
      }
    }

    return Object.defineProperty(target, key, {
      get: init(true),
      set: init(false),
      enumerable: true,
      configurable: true
    });
  }
}


