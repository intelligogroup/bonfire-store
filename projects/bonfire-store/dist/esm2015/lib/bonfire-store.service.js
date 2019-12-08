/**
 * @fileoverview added by tsickle
 * Generated from: lib/bonfire-store.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable } from '@angular/core';
import { WithObservable } from '@intelligo.ai/bonfire';
import { BonfireStore } from './bonfire-store.model';
import * as i0 from "@angular/core";
import * as i1 from "./bonfire-store.model";
// @dynamic
/**
 * @template T, J
 */
export class BonfireStoreService extends BonfireStore.Store {
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
/** @nocollapse */ BonfireStoreService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function BonfireStoreService_Factory() { return new BonfireStoreService(i0.ɵɵinject(i1.BonfireStore.BONFIRE_CONFIG)); }, token: BonfireStoreService, providedIn: "root" });
tslib_1.__decorate([
    WithObservable(),
    tslib_1.__metadata("design:type", Array)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9uZmlyZS1zdG9yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGludGVsbGlnby5haS9ib25maXJlLXN0b3JlLyIsInNvdXJjZXMiOlsibGliL2JvbmZpcmUtc3RvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0FBT3JELE1BQU0sT0FBTyxtQkFBZ0MsU0FBUSxZQUFZLENBQUMsS0FBUTs7OztJQUd4RSxZQUMrQyxZQUFlO1FBRTVELEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUZ5QixpQkFBWSxHQUFaLFlBQVksQ0FBRztRQUhwQyxjQUFTLEdBQTRCLEVBQUUsQ0FBQztRQU1oRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFHRCxnQkFBZ0IsQ0FBQyxZQUFlOztjQUN4QixRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVSxDQUFDLENBQUMsT0FBTyxFQUFFO1FBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBSSxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN2RSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7O1lBbEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs0Q0FLSSxNQUFNLFNBQUMsWUFBWSxDQUFDLGNBQWM7OztBQUhuQjtJQUFqQixjQUFjLEVBQUU7O3NEQUFpRDs7Ozs7O0lBQWxFLHdDQUFrRTs7Ozs7SUFDbEUseUNBQTZEOzs7OztJQUUzRCwyQ0FBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpdGhPYnNlcnZhYmxlIH0gZnJvbSAnQGludGVsbGlnby5haS9ib25maXJlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQm9uZmlyZVN0b3JlIH0gZnJvbSAnLi9ib25maXJlLXN0b3JlLm1vZGVsJztcblxuXG4vLyBAZHluYW1pY1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQm9uZmlyZVN0b3JlU2VydmljZTxULCBKID0gYW55PiBleHRlbmRzIEJvbmZpcmVTdG9yZS5TdG9yZTxUPiB7XG4gIEBXaXRoT2JzZXJ2YWJsZSgpIHByaXZhdGUgc3ViU3RvcmVzOiBCb25maXJlU3RvcmUuU3RvcmU8Sj5bXSA9IFtdO1xuICBwcml2YXRlIHN1YlN0b3JlcyQ6IEJlaGF2aW9yU3ViamVjdDxCb25maXJlU3RvcmUuU3RvcmU8Sj5bXT47XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQm9uZmlyZVN0b3JlLkJPTkZJUkVfQ09ORklHKSBwcml2YXRlIGluaXRpYWxWYWx1ZTogVFxuICApIHtcbiAgICBzdXBlcihpbml0aWFsVmFsdWUpO1xuICAgIHRoaXMuc3RvcmUgPSB0aGlzLmluaXRpYWxWYWx1ZTtcbiAgfVxuXG5cbiAgY3JlYXRlTG9jYWxTdG9yZShpbml0aWFsVmFsdWU6IEopIHtcbiAgICBjb25zdCBzdG9yZUtleSA9IChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMCkudG9GaXhlZCgpO1xuICAgIHRoaXMuc3ViU3RvcmVzLnB1c2gobmV3IEJvbmZpcmVTdG9yZS5TdG9yZTxKPihpbml0aWFsVmFsdWUsIHN0b3JlS2V5KSk7XG4gICAgcmV0dXJuIHRoaXMuc3ViU3RvcmVzW3RoaXMuc3ViU3RvcmVzLmxlbmd0aCAtIDFdO1xuICB9XG5cblxuXG59XG4iXX0=