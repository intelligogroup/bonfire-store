/**
 * @fileoverview added by tsickle
 * Generated from: lib/bonfire-store.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { WithObservable } from '@intelligo.ai/bonfire';
import { InjectionToken } from '@angular/core';
import { map, tap } from 'rxjs/operators';
// tslint:disable-next-line: no-namespace
export var BonfireStore;
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
        tslib_1.__decorate([
            WithObservable(),
            tslib_1.__metadata("design:type", Object)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9uZmlyZS1zdG9yZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpbnRlbGxpZ28uYWkvYm9uZmlyZS1zdG9yZS8iLCJzb3VyY2VzIjpbImxpYi9ib25maXJlLXN0b3JlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9DLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBSzFDLE1BQU0sS0FBVyxZQUFZLENBc0Q1QjtBQXRERCxXQUFpQixZQUFZOzs7OztJQVMzQixxQkFFQzs7SUFFWSwyQkFBYyxHQUFHLElBQUksY0FBYyxDQUFTLGdCQUFnQixDQUFDOzs7O0lBRTFFO1FBRUUsZUFBWSxZQUFlLEVBQVMsSUFBYTtZQUFiLFNBQUksR0FBSixJQUFJLENBQVM7WUFDL0MsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO2FBQzNCO1FBQ0gsQ0FBQzs7Ozs7O1FBRUQsb0JBQUk7Ozs7O1FBQUosVUFDRSxHQUFhLEVBQ2IsUUFBbUQ7O2dCQUc3QyxXQUFXOzs7O1lBQUcsVUFBQSxLQUFLLElBQUksT0FBQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxtQkFBQSxHQUFHLEVBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQW5DLENBQW1DLENBQUE7WUFHaEUsT0FBTyxJQUFJLENBQUMsTUFBTTtpQkFDZixZQUFZLEVBQUU7aUJBQ2QsSUFBSSxDQUNILEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFDaEIsR0FBRyxDQUFDLFFBQVEsSUFBSTs7OztZQUFDLFVBQUMsS0FBSyxJQUFPLENBQUMsRUFBQyxDQUFDLENBQ2xDLENBQUM7UUFFTixDQUFDOzs7Ozs7O1FBRUQsb0JBQUk7Ozs7OztRQUFKLFVBQWMsR0FBWSxFQUFFLEtBQVE7WUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxtQkFBQSxLQUFLLEVBQU8sQ0FBQztRQUNqQyxDQUFDOzs7OztRQUVELG9CQUFJOzs7O1FBQUosVUFBSyxHQUFZO1lBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7UUE5QmlCO1lBQWpCLGNBQWMsRUFBRTs7NENBQWlCO1FBK0JwQyxZQUFDO0tBQUEsQUFoQ0QsSUFnQ0M7SUFoQ1ksa0JBQUssUUFnQ2pCLENBQUE7OztRQS9CQyxzQkFBa0M7Ozs7O1FBQUMsdUJBQW1DOztRQUN6QyxxQkFBb0I7Ozs7OztJQWdDbkQsd0JBRUM7O0FBR0gsQ0FBQyxFQXREZ0IsWUFBWSxLQUFaLFlBQVksUUFzRDVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2l0aE9ic2VydmFibGUgfSBmcm9tICdAaW50ZWxsaWdvLmFpL2JvbmZpcmUnO1xuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCb25maXJlU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9ib25maXJlLXN0b3JlLnNlcnZpY2UnO1xuXG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbmFtZXNwYWNlXG5leHBvcnQgbmFtZXNwYWNlIEJvbmZpcmVTdG9yZSB7XG4gIGV4cG9ydCB0eXBlIFZhbHVlT2Y8VD4gPSBUW2tleW9mIFRdO1xuXG4gIGV4cG9ydCB0eXBlIEVycm9yVHlwZSA9ICdTRVJWSUNFX05PVF9GT1VORCcgfCAnTE9DQUxfU1RPUkVfTk9UX0ZPVU5EJztcblxuICBleHBvcnQgdHlwZSBGcm9tU3RvcmU8VCA9IGFueT4gPSBPYnNlcnZhYmxlPFQ+IHwgVCB8IGFueTtcblxuICBleHBvcnQgdHlwZSBTZXJ2aWNlVHVwbGU8VCA9IGFueSwgSiA9IGFueT4gPSBbc3RyaW5nLCBCb25maXJlU3RvcmVTZXJ2aWNlPFQsIEo+XTtcblxuICBleHBvcnQgaW50ZXJmYWNlIENvbmZpZzxUID0gYW55PiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbiAgfVxuXG4gIGV4cG9ydCBjb25zdCBCT05GSVJFX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxDb25maWc+KCdCT05GSVJFX0NPTkZJRycpO1xuXG4gIGV4cG9ydCBjbGFzcyBTdG9yZTxUPiB7XG4gICAgQFdpdGhPYnNlcnZhYmxlKCkgcHVibGljIHN0b3JlOiBUOyBwcml2YXRlIHN0b3JlJDogQmVoYXZpb3JTdWJqZWN0PFQ+O1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZTogVCwgcHVibGljIG5hbWU/OiBzdHJpbmcpIHtcbiAgICAgIGlmIChpbml0aWFsVmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdG9yZSA9IGluaXRpYWxWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQkKFxuICAgICAga2V5Pzoga2V5b2YgVCxcbiAgICAgIGNhbGxiYWNrPzogKHZhbHVlOiBCb25maXJlU3RvcmUuVmFsdWVPZjxUPikgPT4gdm9pZFxuICAgICk6IE9ic2VydmFibGU8Qm9uZmlyZVN0b3JlLlZhbHVlT2Y8VD4+IHtcblxuICAgICAgY29uc3QgbWFwQ2FsbGJhY2sgPSBzdG9yZSA9PiBrZXkgPyBzdG9yZVtrZXkgYXMga2V5b2YgVF0gOiBzdG9yZTtcblxuXG4gICAgICByZXR1cm4gdGhpcy5zdG9yZSRcbiAgICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChtYXBDYWxsYmFjayksXG4gICAgICAgICAgdGFwKGNhbGxiYWNrIHx8ICgodmFsdWUpID0+IHsgfSkpXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBzZXQkPEogPSBhbnk+KGtleToga2V5b2YgVCwgdmFsdWU6IEopIHtcbiAgICAgIHRoaXMuc3RvcmVba2V5XSA9IHZhbHVlIGFzIGFueTtcbiAgICB9XG5cbiAgICBfZ2V0KGtleToga2V5b2YgVCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcmVba2V5XTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFN1YlN0b3JlczxKID0gYW55PiB7XG4gICAgW2tleTogc3RyaW5nXTogU3RvcmU8Sj47XG4gIH1cblxuXG59XG4iXX0=