import { __decorate, __metadata } from 'tslib';
import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, Component, NgModule } from '@angular/core';
import { WithObservable } from '@intelligo.ai/bonfire';
import { map, tap } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/bonfire-store.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable-next-line: no-namespace
var BonfireStore;
(function (BonfireStore) {
    /**
     * @record
     * @template T
     */
    function Config() { }
    BonfireStore.Config = Config;
    BonfireStore.BONFIRE_CONFIG = new InjectionToken('BONFIRE_CONFIG');
    /**
     * @template T
     */
    class Store {
        /**
         * @param {?} initialValue
         * @param {?=} name
         */
        constructor(initialValue, name) {
            this.name = name;
            if (initialValue) {
                this.store = initialValue;
            }
        }
        /**
         * @param {?=} key
         * @param {?=} callback
         * @return {?}
         */
        get$(key, callback) {
            /** @type {?} */
            const mapCallback = (/**
             * @param {?} store
             * @return {?}
             */
            store => key ? store[(/** @type {?} */ (key))] : store);
            return this.store$
                .asObservable()
                .pipe(map(mapCallback), tap(callback || ((/**
             * @param {?} value
             * @return {?}
             */
            (value) => { }))));
        }
        /**
         * @template J
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        set$(key, value) {
            this.store[key] = (/** @type {?} */ (value));
        }
        /**
         * @param {?} key
         * @return {?}
         */
        _get(key) {
            return this.store[key];
        }
    }
    __decorate([
        WithObservable(),
        __metadata("design:type", Object)
    ], Store.prototype, "store", void 0);
    BonfireStore.Store = Store;
    if (false) {
        /** @type {?} */
        Store.prototype.store;
        /**
         * @type {?}
         * @private
         */
        Store.prototype.store$;
        /** @type {?} */
        Store.prototype.name;
    }
    /**
     * @record
     * @template J
     */
    function SubStores() { }
    BonfireStore.SubStores = SubStores;
})(BonfireStore || (BonfireStore = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/bonfire-store.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
/**
 * @template T, J
 */
class BonfireStoreService extends BonfireStore.Store {
    /**
     * @param {?} initialValue
     */
    constructor(initialValue) {
        super(initialValue);
        this.initialValue = initialValue;
        this.subStores = [];
        this.store = this.initialValue;
    }
    /**
     * @param {?} initialValue
     * @return {?}
     */
    createLocalStore(initialValue) {
        /** @type {?} */
        const storeKey = (Math.random() * 1000000000).toFixed();
        this.subStores.push(new BonfireStore.Store(initialValue, storeKey));
        return this.subStores[this.subStores.length - 1];
    }
}
BonfireStoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
BonfireStoreService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [BonfireStore.BONFIRE_CONFIG,] }] }
];
/** @nocollapse */ BonfireStoreService.ngInjectableDef = ɵɵdefineInjectable({ factory: function BonfireStoreService_Factory() { return new BonfireStoreService(ɵɵinject(BonfireStore.BONFIRE_CONFIG)); }, token: BonfireStoreService, providedIn: "root" });
__decorate([
    WithObservable(),
    __metadata("design:type", Array)
], BonfireStoreService.prototype, "subStores", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    BonfireStoreService.prototype.subStores;
    /**
     * @type {?}
     * @private
     */
    BonfireStoreService.prototype.subStores$;
    /**
     * @type {?}
     * @private
     */
    BonfireStoreService.prototype.initialValue;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/bonfire-store.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BonfireStoreComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BonfireStoreComponent.decorators = [
    { type: Component, args: [{
                selector: 'false-bonfire-store',
                template: `
    <p>
      bonfire-store works!
    </p>
  `
            }] }
];
/** @nocollapse */
BonfireStoreComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/bonfire-store.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
class BonfireStoreModule {
    /**
     * @param {?=} useValue
     * @return {?}
     */
    static forRoot(useValue = {}) {
        return {
            ngModule: BonfireStoreModule,
            providers: [
                { provide: BonfireStore.BONFIRE_CONFIG, useValue }
            ],
        };
    }
}
BonfireStoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: [BonfireStoreComponent],
                imports: [],
                exports: [BonfireStoreComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/bonfire-store.util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} errorType
 * @return {?}
 */
function handleErrors(errorType) {
    /** @type {?} */
    let errorMessage;
    switch (errorType) {
        case 'SERVICE_NOT_FOUND':
            errorMessage = `
      Injection Error. Decorator Can't work without injecting the main store service.

      Example:

        constructor(
          ===> private bonfireStoreService: BonfireStoreService<{ counter: number }, LocalStore>
        ) { }
    `;
            break;
        case 'LOCAL_STORE_NOT_FOUND':
            errorMessage = `
      Creation Error. Local store is not found.

      Example:

      ===> localStore = this.bonfireStoreService.createLocalStore('SOME_NAME', { ... });

      constructor(
        private bonfireStoreService: BonfireStoreService<{ counter: number }, LocalStore>
      ) { }
      `;
            break;
        default:
            break;
    }
    if (errorMessage) {
        throw new Error(errorMessage);
    }
}
/**
 * @template J, T
 * @param {?=} keyName
 * @return {?}
 */
function FromLocalStore(keyName) {
    return (/**
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    (target, key) => {
        /** @type {?} */
        const init = (/**
         * @param {?} isGet
         * @return {?}
         */
        function (isGet) {
            return (/**
             * @param {?=} newVal
             * @return {?}
             */
            function (newVal) {
                /** @type {?} */
                const localStore = (/** @type {?} */ ((/** @type {?} */ (Object
                    .values(this)
                    .find((/**
                 * @param {?} value
                 * @return {?}
                 */
                value => value instanceof BonfireStore.Store &&
                    !(value instanceof BonfireStoreService)))))));
                if (!localStore) {
                    handleErrors('LOCAL_STORE_NOT_FOUND');
                }
                Object.defineProperty(this, key, {
                    get: (/**
                     * @return {?}
                     */
                    () => {
                        return localStore.get$(keyName);
                    }),
                    set: (/**
                     * @param {?} val
                     * @return {?}
                     */
                    (val) => {
                        localStore.set$(keyName, val);
                    }),
                    enumerable: true,
                    configurable: true
                });
                if (isGet) {
                    return this[key]; // get
                }
                else {
                    this[key] = newVal; // set
                }
            });
        });
        return Object.defineProperty(target, key, {
            get: init(true),
            set: init(false),
            enumerable: true,
            configurable: true
        });
    });
}
/**
 * @template T, J
 * @param {?=} name
 * @return {?}
 */
function FromStore(name) {
    return (/**
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    (target, key) => {
        /** @type {?} */
        const init = (/**
         * @param {?} isGet
         * @return {?}
         */
        function (isGet) {
            return (/**
             * @param {?=} newVal
             * @return {?}
             */
            function (newVal) {
                /** @type {?} */
                const bonfireService = (/** @type {?} */ ((/** @type {?} */ (Object
                    .values(this)
                    .find((/**
                 * @param {?} value
                 * @return {?}
                 */
                (value) => value instanceof BonfireStoreService))))));
                if (!bonfireService) {
                    handleErrors('SERVICE_NOT_FOUND');
                }
                if (!name) {
                    name = key;
                }
                Object.defineProperty(this, key, {
                    get: (/**
                     * @return {?}
                     */
                    () => {
                        return bonfireService.get$(name);
                    }),
                    set: (/**
                     * @param {?} val
                     * @return {?}
                     */
                    (val) => {
                        bonfireService.set$(name, val);
                    }),
                    enumerable: true,
                    configurable: true
                });
                if (isGet) {
                    return this[key]; // get
                }
                else {
                    this[key] = newVal; // set
                }
            });
        });
        return Object.defineProperty(target, key, {
            get: init(true),
            set: init(false),
            enumerable: true,
            configurable: true
        });
    });
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: intelligo.ai-bonfire-store.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BonfireStore, BonfireStoreComponent, BonfireStoreModule, BonfireStoreService, FromLocalStore, FromStore, BonfireStore as ɵa };
//# sourceMappingURL=intelligo.ai-bonfire-store.js.map
