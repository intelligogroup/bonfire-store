/**
 * @fileoverview added by tsickle
 * Generated from: lib/bonfire-store.util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BonfireStoreService } from './bonfire-store.service';
import { BonfireStore } from './bonfire-store.model';
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
export function FromLocalStore(keyName) {
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
export function FromStore(name) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9uZmlyZS1zdG9yZS51dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGludGVsbGlnby5haS9ib25maXJlLXN0b3JlLyIsInNvdXJjZXMiOlsibGliL2JvbmZpcmUtc3RvcmUudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFJckQsU0FBUyxZQUFZLENBQUMsU0FBaUM7O1FBQ2pELFlBQW9CO0lBQ3hCLFFBQVEsU0FBUyxFQUFFO1FBQ2pCLEtBQUssbUJBQW1CO1lBQ3RCLFlBQVksR0FBRywwUEFRaEIsQ0FBQztZQUNBLE1BQU07UUFFUixLQUFLLHVCQUF1QjtZQUMxQixZQUFZLEdBQUcsdVNBVWQsQ0FBQTtZQUNELE1BQU07UUFDUjtZQUNFLE1BQU07S0FDVDtJQUdELElBQUksWUFBWSxFQUFFO1FBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDL0I7QUFDSCxDQUFDOzs7Ozs7QUFJRCxNQUFNLFVBQVUsY0FBYyxDQUFtQixPQUF1QjtJQUV0RTs7Ozs7SUFBTyxVQUFDLE1BQVcsRUFBRSxHQUFZOztZQUN6QixJQUFJOzs7O1FBQUcsVUFBVSxLQUFjO1lBQ25DOzs7O1lBQU8sVUFBVSxNQUFPOztvQkFDaEIsVUFBVSxHQUFHLG1CQUFBLG1CQUFBLE1BQU07cUJBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUM7cUJBQ1osSUFBSTs7OztnQkFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssWUFBWSxZQUFZLENBQUMsS0FBSztvQkFDaEQsQ0FBQyxDQUFDLEtBQUssWUFBWSxtQkFBbUIsQ0FBQyxFQUQxQixDQUMwQixFQUFDLEVBQVcsRUFBeUI7Z0JBRWhGLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2YsWUFBWSxDQUFDLHVCQUF1QixDQUFDLENBQUM7aUJBQ3ZDO2dCQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtvQkFDL0IsR0FBRzs7O29CQUFFO3dCQUNILE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbEMsQ0FBQyxDQUFBO29CQUNELEdBQUc7Ozs7b0JBQUUsVUFBQyxHQUFNO3dCQUNWLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNoQyxDQUFDLENBQUE7b0JBQ0QsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFlBQVksRUFBRSxJQUFJO2lCQUNuQixDQUFDLENBQUM7Z0JBRUgsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNO2lCQUN6QjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsTUFBTTtpQkFDM0I7WUFDSCxDQUFDLEVBQUM7UUFDSixDQUFDLENBQUE7UUFFRCxPQUFPLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUN4QyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNmLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUMsRUFBQztBQUNKLENBQUM7Ozs7OztBQUlELE1BQU0sVUFBVSxTQUFTLENBQW1CLElBQW9CO0lBRTlEOzs7OztJQUFPLFVBQUMsTUFBVyxFQUFFLEdBQVk7O1lBQ3pCLElBQUk7Ozs7UUFBRyxVQUFVLEtBQWM7WUFDbkM7Ozs7WUFBTyxVQUFVLE1BQU87O29CQUNoQixjQUFjLEdBQUcsbUJBQUEsbUJBQUEsTUFBTTtxQkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQztxQkFDWixJQUFJOzs7O2dCQUFDLFVBQUMsS0FBSyxJQUFjLE9BQUEsS0FBSyxZQUFZLG1CQUFtQixFQUFwQyxDQUFvQyxFQUFDLEVBQVcsRUFBNkI7Z0JBRXpHLElBQUksQ0FBQyxjQUFjLEVBQUU7b0JBQ25CLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2lCQUNuQztnQkFHRCxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNULElBQUksR0FBRyxHQUFHLENBQUM7aUJBQ1o7Z0JBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO29CQUMvQixHQUFHOzs7b0JBQUU7d0JBQ0gsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNuQyxDQUFDLENBQUE7b0JBQ0QsR0FBRzs7OztvQkFBRSxVQUFDLEdBQU07d0JBQ1YsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ2pDLENBQUMsQ0FBQTtvQkFDRCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsWUFBWSxFQUFFLElBQUk7aUJBQ25CLENBQUMsQ0FBQztnQkFFSCxJQUFJLEtBQUssRUFBRTtvQkFDVCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU07aUJBQ3pCO3FCQUFNO29CQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxNQUFNO2lCQUMzQjtZQUNILENBQUMsRUFBQztRQUNKLENBQUMsQ0FBQTtRQUVELE9BQU8sTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQ3hDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2YsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvbmZpcmVTdG9yZVNlcnZpY2UgfSBmcm9tICcuL2JvbmZpcmUtc3RvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBCb25maXJlU3RvcmUgfSBmcm9tICcuL2JvbmZpcmUtc3RvcmUubW9kZWwnO1xuaW1wb3J0ICogYXMgb25DaGFuZ2UgZnJvbSAnb24tY2hhbmdlJztcblxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcnMoZXJyb3JUeXBlOiBCb25maXJlU3RvcmUuRXJyb3JUeXBlKSB7XG4gIGxldCBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgc3dpdGNoIChlcnJvclR5cGUpIHtcbiAgICBjYXNlICdTRVJWSUNFX05PVF9GT1VORCc6XG4gICAgICBlcnJvck1lc3NhZ2UgPSBgXG4gICAgICBJbmplY3Rpb24gRXJyb3IuIERlY29yYXRvciBDYW4ndCB3b3JrIHdpdGhvdXQgaW5qZWN0aW5nIHRoZSBtYWluIHN0b3JlIHNlcnZpY2UuXG5cbiAgICAgIEV4YW1wbGU6XG5cbiAgICAgICAgY29uc3RydWN0b3IoXG4gICAgICAgICAgPT09PiBwcml2YXRlIGJvbmZpcmVTdG9yZVNlcnZpY2U6IEJvbmZpcmVTdG9yZVNlcnZpY2U8eyBjb3VudGVyOiBudW1iZXIgfSwgTG9jYWxTdG9yZT5cbiAgICAgICAgKSB7IH1cbiAgICBgO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdMT0NBTF9TVE9SRV9OT1RfRk9VTkQnOlxuICAgICAgZXJyb3JNZXNzYWdlID0gYFxuICAgICAgQ3JlYXRpb24gRXJyb3IuIExvY2FsIHN0b3JlIGlzIG5vdCBmb3VuZC5cblxuICAgICAgRXhhbXBsZTpcblxuICAgICAgPT09PiBsb2NhbFN0b3JlID0gdGhpcy5ib25maXJlU3RvcmVTZXJ2aWNlLmNyZWF0ZUxvY2FsU3RvcmUoJ1NPTUVfTkFNRScsIHsgLi4uIH0pO1xuXG4gICAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBib25maXJlU3RvcmVTZXJ2aWNlOiBCb25maXJlU3RvcmVTZXJ2aWNlPHsgY291bnRlcjogbnVtYmVyIH0sIExvY2FsU3RvcmU+XG4gICAgICApIHsgfVxuICAgICAgYFxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cblxuICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gIH1cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBGcm9tTG9jYWxTdG9yZTxKID0gYW55LCBUID0gYW55PihrZXlOYW1lPzoga2V5b2YgVCB8IGFueSkge1xuXG4gIHJldHVybiAodGFyZ2V0OiBhbnksIGtleToga2V5b2YgVCkgPT4ge1xuICAgIGNvbnN0IGluaXQgPSBmdW5jdGlvbiAoaXNHZXQ6IGJvb2xlYW4pIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAobmV3VmFsPykge1xuICAgICAgICBjb25zdCBsb2NhbFN0b3JlID0gT2JqZWN0XG4gICAgICAgICAgLnZhbHVlcyh0aGlzKVxuICAgICAgICAgIC5maW5kKHZhbHVlID0+IHZhbHVlIGluc3RhbmNlb2YgQm9uZmlyZVN0b3JlLlN0b3JlICYmXG4gICAgICAgICAgICAhKHZhbHVlIGluc3RhbmNlb2YgQm9uZmlyZVN0b3JlU2VydmljZSkpIGFzIHVua25vd24gYXMgQm9uZmlyZVN0b3JlLlN0b3JlPFQ+O1xuXG4gICAgICAgIGlmICghbG9jYWxTdG9yZSkge1xuICAgICAgICAgIGhhbmRsZUVycm9ycygnTE9DQUxfU1RPUkVfTk9UX0ZPVU5EJyk7XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XG4gICAgICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yZS5nZXQkKGtleU5hbWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0OiAodmFsOiBUKSA9PiB7XG4gICAgICAgICAgICBsb2NhbFN0b3JlLnNldCQoa2V5TmFtZSwgdmFsKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpc0dldCkge1xuICAgICAgICAgIHJldHVybiB0aGlzW2tleV07IC8vIGdldFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXNba2V5XSA9IG5ld1ZhbDsgLy8gc2V0XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcbiAgICAgIGdldDogaW5pdCh0cnVlKSxcbiAgICAgIHNldDogaW5pdChmYWxzZSksXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH07XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gRnJvbVN0b3JlPFQgPSBhbnksIEogPSBhbnk+KG5hbWU/OiBrZXlvZiBUIHwgYW55KSB7XG5cbiAgcmV0dXJuICh0YXJnZXQ6IGFueSwga2V5OiBrZXlvZiBUKSA9PiB7XG4gICAgY29uc3QgaW5pdCA9IGZ1bmN0aW9uIChpc0dldDogYm9vbGVhbikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuZXdWYWw/KSB7XG4gICAgICAgIGNvbnN0IGJvbmZpcmVTZXJ2aWNlID0gT2JqZWN0XG4gICAgICAgICAgLnZhbHVlcyh0aGlzKVxuICAgICAgICAgIC5maW5kKCh2YWx1ZSk6IGJvb2xlYW4gPT4gdmFsdWUgaW5zdGFuY2VvZiBCb25maXJlU3RvcmVTZXJ2aWNlKSBhcyB1bmtub3duIGFzIEJvbmZpcmVTdG9yZVNlcnZpY2U8VCwgSj47XG5cbiAgICAgICAgaWYgKCFib25maXJlU2VydmljZSkge1xuICAgICAgICAgIGhhbmRsZUVycm9ycygnU0VSVklDRV9OT1RfRk9VTkQnKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgbmFtZSA9IGtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICAgICAgICBnZXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBib25maXJlU2VydmljZS5nZXQkKG5hbWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0OiAodmFsOiBUKSA9PiB7XG4gICAgICAgICAgICBib25maXJlU2VydmljZS5zZXQkKG5hbWUsIHZhbCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXNHZXQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1trZXldOyAvLyBnZXRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzW2tleV0gPSBuZXdWYWw7IC8vIHNldFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICBnZXQ6IGluaXQodHJ1ZSksXG4gICAgICBzZXQ6IGluaXQoZmFsc2UpLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9O1xufVxuIl19