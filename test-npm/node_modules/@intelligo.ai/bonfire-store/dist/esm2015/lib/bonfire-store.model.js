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
    tslib_1.__decorate([
        WithObservable(),
        tslib_1.__metadata("design:type", Object)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9uZmlyZS1zdG9yZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpbnRlbGxpZ28uYWkvYm9uZmlyZS1zdG9yZS8iLCJzb3VyY2VzIjpbImxpYi9ib25maXJlLXN0b3JlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9DLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBSzFDLE1BQU0sS0FBVyxZQUFZLENBc0Q1QjtBQXRERCxXQUFpQixZQUFZOzs7OztJQVMzQixxQkFFQzs7SUFFWSwyQkFBYyxHQUFHLElBQUksY0FBYyxDQUFTLGdCQUFnQixDQUFDOzs7O0lBRTFFLE1BQWEsS0FBSzs7Ozs7UUFFaEIsWUFBWSxZQUFlLEVBQVMsSUFBYTtZQUFiLFNBQUksR0FBSixJQUFJLENBQVM7WUFDL0MsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO2FBQzNCO1FBQ0gsQ0FBQzs7Ozs7O1FBRUQsSUFBSSxDQUNGLEdBQWEsRUFDYixRQUFtRDs7a0JBRzdDLFdBQVc7Ozs7WUFBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLG1CQUFBLEdBQUcsRUFBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtZQUdoRSxPQUFPLElBQUksQ0FBQyxNQUFNO2lCQUNmLFlBQVksRUFBRTtpQkFDZCxJQUFJLENBQ0gsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUNoQixHQUFHLENBQUMsUUFBUSxJQUFJOzs7O1lBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBQyxDQUFDLENBQ2xDLENBQUM7UUFFTixDQUFDOzs7Ozs7O1FBRUQsSUFBSSxDQUFVLEdBQVksRUFBRSxLQUFRO1lBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsbUJBQUEsS0FBSyxFQUFPLENBQUM7UUFDakMsQ0FBQzs7Ozs7UUFFRCxJQUFJLENBQUMsR0FBWTtZQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDO0tBQ0Y7SUEvQm1CO1FBQWpCLGNBQWMsRUFBRTs7d0NBQWlCO0lBRHZCLGtCQUFLLFFBZ0NqQixDQUFBOzs7UUEvQkMsc0JBQWtDOzs7OztRQUFDLHVCQUFtQzs7UUFDekMscUJBQW9COzs7Ozs7SUFnQ25ELHdCQUVDOztBQUdILENBQUMsRUF0RGdCLFlBQVksS0FBWixZQUFZLFFBc0Q1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdpdGhPYnNlcnZhYmxlIH0gZnJvbSAnQGludGVsbGlnby5haS9ib25maXJlJztcbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQm9uZmlyZVN0b3JlU2VydmljZSB9IGZyb20gJy4vYm9uZmlyZS1zdG9yZS5zZXJ2aWNlJztcblxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5hbWVzcGFjZVxuZXhwb3J0IG5hbWVzcGFjZSBCb25maXJlU3RvcmUge1xuICBleHBvcnQgdHlwZSBWYWx1ZU9mPFQ+ID0gVFtrZXlvZiBUXTtcblxuICBleHBvcnQgdHlwZSBFcnJvclR5cGUgPSAnU0VSVklDRV9OT1RfRk9VTkQnIHwgJ0xPQ0FMX1NUT1JFX05PVF9GT1VORCc7XG5cbiAgZXhwb3J0IHR5cGUgRnJvbVN0b3JlPFQgPSBhbnk+ID0gT2JzZXJ2YWJsZTxUPiB8IFQgfCBhbnk7XG5cbiAgZXhwb3J0IHR5cGUgU2VydmljZVR1cGxlPFQgPSBhbnksIEogPSBhbnk+ID0gW3N0cmluZywgQm9uZmlyZVN0b3JlU2VydmljZTxULCBKPl07XG5cbiAgZXhwb3J0IGludGVyZmFjZSBDb25maWc8VCA9IGFueT4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG4gIH1cblxuICBleHBvcnQgY29uc3QgQk9ORklSRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48Q29uZmlnPignQk9ORklSRV9DT05GSUcnKTtcblxuICBleHBvcnQgY2xhc3MgU3RvcmU8VD4ge1xuICAgIEBXaXRoT2JzZXJ2YWJsZSgpIHB1YmxpYyBzdG9yZTogVDsgcHJpdmF0ZSBzdG9yZSQ6IEJlaGF2aW9yU3ViamVjdDxUPjtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWU6IFQsIHB1YmxpYyBuYW1lPzogc3RyaW5nKSB7XG4gICAgICBpZiAoaW5pdGlhbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBpbml0aWFsVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0JChcbiAgICAgIGtleT86IGtleW9mIFQsXG4gICAgICBjYWxsYmFjaz86ICh2YWx1ZTogQm9uZmlyZVN0b3JlLlZhbHVlT2Y8VD4pID0+IHZvaWRcbiAgICApOiBPYnNlcnZhYmxlPEJvbmZpcmVTdG9yZS5WYWx1ZU9mPFQ+PiB7XG5cbiAgICAgIGNvbnN0IG1hcENhbGxiYWNrID0gc3RvcmUgPT4ga2V5ID8gc3RvcmVba2V5IGFzIGtleW9mIFRdIDogc3RvcmU7XG5cblxuICAgICAgcmV0dXJuIHRoaXMuc3RvcmUkXG4gICAgICAgIC5hc09ic2VydmFibGUoKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAobWFwQ2FsbGJhY2spLFxuICAgICAgICAgIHRhcChjYWxsYmFjayB8fCAoKHZhbHVlKSA9PiB7IH0pKVxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgc2V0JDxKID0gYW55PihrZXk6IGtleW9mIFQsIHZhbHVlOiBKKSB7XG4gICAgICB0aGlzLnN0b3JlW2tleV0gPSB2YWx1ZSBhcyBhbnk7XG4gICAgfVxuXG4gICAgX2dldChrZXk6IGtleW9mIFQpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3JlW2tleV07XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBTdWJTdG9yZXM8SiA9IGFueT4ge1xuICAgIFtrZXk6IHN0cmluZ106IFN0b3JlPEo+O1xuICB9XG5cblxufVxuIl19