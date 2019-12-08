import { __decorate, __metadata, __extends } from 'tslib';
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
    var Store = /** @class */ (function () {
        function Store(initialValue, name) {
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
        Store.prototype.get$ = /**
         * @param {?=} key
         * @param {?=} callback
         * @return {?}
         */
        function (key, callback) {
            /** @type {?} */
            var mapCallback = (/**
             * @param {?} store
             * @return {?}
             */
            function (store) { return key ? store[(/** @type {?} */ (key))] : store; });
            return this.store$
                .asObservable()
                .pipe(map(mapCallback), tap(callback || ((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { }))));
        };
        /**
         * @template J
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        Store.prototype.set$ = /**
         * @template J
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        function (key, value) {
            this.store[key] = (/** @type {?} */ (value));
        };
        /**
         * @param {?} key
         * @return {?}
         */
        Store.prototype._get = /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            return this.store[key];
        };
        __decorate([
            WithObservable(),
            __metadata("design:type", Object)
        ], Store.prototype, "store", void 0);
        return Store;
    }());
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
var BonfireStoreService = /** @class */ (function (_super) {
    __extends(BonfireStoreService, _super);
    function BonfireStoreService(initialValue) {
        var _this = _super.call(this, initialValue) || this;
        _this.initialValue = initialValue;
        _this.subStores = [];
        _this.store = _this.initialValue;
        return _this;
    }
    /**
     * @param {?} initialValue
     * @return {?}
     */
    BonfireStoreService.prototype.createLocalStore = /**
     * @param {?} initialValue
     * @return {?}
     */
    function (initialValue) {
        /** @type {?} */
        var storeKey = (Math.random() * 1000000000).toFixed();
        this.subStores.push(new BonfireStore.Store(initialValue, storeKey));
        return this.subStores[this.subStores.length - 1];
    };
    BonfireStoreService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BonfireStoreService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [BonfireStore.BONFIRE_CONFIG,] }] }
    ]; };
    /** @nocollapse */ BonfireStoreService.ngInjectableDef = ɵɵdefineInjectable({ factory: function BonfireStoreService_Factory() { return new BonfireStoreService(ɵɵinject(BonfireStore.BONFIRE_CONFIG)); }, token: BonfireStoreService, providedIn: "root" });
    __decorate([
        WithObservable(),
        __metadata("design:type", Array)
    ], BonfireStoreService.prototype, "subStores", void 0);
    return BonfireStoreService;
}(BonfireStore.Store));
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
var BonfireStoreComponent = /** @class */ (function () {
    function BonfireStoreComponent() {
    }
    /**
     * @return {?}
     */
    BonfireStoreComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BonfireStoreComponent.decorators = [
        { type: Component, args: [{
                    selector: 'false-bonfire-store',
                    template: "\n    <p>\n      bonfire-store works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    BonfireStoreComponent.ctorParameters = function () { return []; };
    return BonfireStoreComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/bonfire-store.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
var BonfireStoreModule = /** @class */ (function () {
    function BonfireStoreModule() {
    }
    /**
     * @param {?=} useValue
     * @return {?}
     */
    BonfireStoreModule.forRoot = /**
     * @param {?=} useValue
     * @return {?}
     */
    function (useValue) {
        if (useValue === void 0) { useValue = {}; }
        return {
            ngModule: BonfireStoreModule,
            providers: [
                { provide: BonfireStore.BONFIRE_CONFIG, useValue: useValue }
            ],
        };
    };
    BonfireStoreModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BonfireStoreComponent],
                    imports: [],
                    exports: [BonfireStoreComponent]
                },] }
    ];
    return BonfireStoreModule;
}());

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
    var errorMessage;
    switch (errorType) {
        case 'SERVICE_NOT_FOUND':
            errorMessage = "\n      Injection Error. Decorator Can't work without injecting the main store service.\n\n      Example:\n\n        constructor(\n          ===> private bonfireStoreService: BonfireStoreService<{ counter: number }, LocalStore>\n        ) { }\n    ";
            break;
        case 'LOCAL_STORE_NOT_FOUND':
            errorMessage = "\n      Creation Error. Local store is not found.\n\n      Example:\n\n      ===> localStore = this.bonfireStoreService.createLocalStore('SOME_NAME', { ... });\n\n      constructor(\n        private bonfireStoreService: BonfireStoreService<{ counter: number }, LocalStore>\n      ) { }\n      ";
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
    function (target, key) {
        /** @type {?} */
        var init = (/**
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
                var localStore = (/** @type {?} */ ((/** @type {?} */ (Object
                    .values(this)
                    .find((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) { return value instanceof BonfireStore.Store &&
                    !(value instanceof BonfireStoreService); }))))));
                if (!localStore) {
                    handleErrors('LOCAL_STORE_NOT_FOUND');
                }
                Object.defineProperty(this, key, {
                    get: (/**
                     * @return {?}
                     */
                    function () {
                        return localStore.get$(keyName);
                    }),
                    set: (/**
                     * @param {?} val
                     * @return {?}
                     */
                    function (val) {
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
    function (target, key) {
        /** @type {?} */
        var init = (/**
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
                var bonfireService = (/** @type {?} */ ((/** @type {?} */ (Object
                    .values(this)
                    .find((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) { return value instanceof BonfireStoreService; }))))));
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
                    function () {
                        return bonfireService.get$(name);
                    }),
                    set: (/**
                     * @param {?} val
                     * @return {?}
                     */
                    function (val) {
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
