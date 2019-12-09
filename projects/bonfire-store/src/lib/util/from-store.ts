import handleErrors from './handle-error';
import { BonfireStoreService } from '../bonfire-store.service';


export default function FromStore<T = any, J = any>(name?: keyof T | any) {

  return (target: any, key: keyof T) => {
    const init = function (isGet: boolean) {
      return function (newVal?) {
        const bonfireService = Object
          .values(this)
          .find((value): boolean => value instanceof BonfireStoreService) as unknown as BonfireStoreService<T, J>;

        if (!bonfireService) {
          handleErrors('SERVICE_NOT_FOUND');
        }


        if (!name) {
          name = key;
        }

        Object.defineProperty(this, key, {
          get: () => {
            return bonfireService.get$(name);
          },
          set: (val: T) => {
            bonfireService.set$(name, val);
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
