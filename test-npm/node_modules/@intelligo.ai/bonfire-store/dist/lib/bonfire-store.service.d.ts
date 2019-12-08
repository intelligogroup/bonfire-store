import { BonfireStore } from './bonfire-store.model';
export declare class BonfireStoreService<T, J = any> extends BonfireStore.Store<T> {
    private initialValue;
    private subStores;
    private subStores$;
    constructor(initialValue: T);
    createLocalStore(initialValue: J): BonfireStore.Store<J>;
}
