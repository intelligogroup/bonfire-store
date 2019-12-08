/**
 * @fileoverview added by tsickle
 * Generated from: lib/bonfire-store.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { BonfireStoreComponent } from './bonfire-store.component';
import { BonfireStore } from './bonfire-store.model';
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
export { BonfireStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9uZmlyZS1zdG9yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW50ZWxsaWdvLmFpL2JvbmZpcmUtc3RvcmUvIiwic291cmNlcyI6WyJsaWIvYm9uZmlyZS1zdG9yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBSXJEO0lBQUE7SUFpQkEsQ0FBQzs7Ozs7SUFSUSwwQkFBTzs7OztJQUFkLFVBQWUsUUFBa0M7UUFBbEMseUJBQUEsRUFBQSxhQUFrQztRQUMvQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLGNBQWMsRUFBRSxRQUFRLFVBQUEsRUFBRTthQUNuRDtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFoQkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO29CQUNyQyxPQUFPLEVBQUUsRUFDUjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDakM7O0lBWUQseUJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVRZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb25maXJlU3RvcmVDb21wb25lbnQgfSBmcm9tICcuL2JvbmZpcmUtc3RvcmUuY29tcG9uZW50JztcbmltcG9ydCB7IEJvbmZpcmVTdG9yZSB9IGZyb20gJy4vYm9uZmlyZS1zdG9yZS5tb2RlbCc7XG5cblxuLy8gQGR5bmFtaWNcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0JvbmZpcmVTdG9yZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZXhwb3J0czogW0JvbmZpcmVTdG9yZUNvbXBvbmVudF1cbn0pXG5cblxuZXhwb3J0IGNsYXNzIEJvbmZpcmVTdG9yZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KHVzZVZhbHVlOiBCb25maXJlU3RvcmUuQ29uZmlnID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEJvbmZpcmVTdG9yZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQm9uZmlyZVN0b3JlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogQm9uZmlyZVN0b3JlLkJPTkZJUkVfQ09ORklHLCB1c2VWYWx1ZSB9XG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==