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
export function FromLocalStore(keyName) {
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
export function FromStore(name) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9uZmlyZS1zdG9yZS51dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGludGVsbGlnby5haS9ib25maXJlLXN0b3JlLyIsInNvdXJjZXMiOlsibGliL2JvbmZpcmUtc3RvcmUudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFJckQsU0FBUyxZQUFZLENBQUMsU0FBaUM7O1FBQ2pELFlBQW9CO0lBQ3hCLFFBQVEsU0FBUyxFQUFFO1FBQ2pCLEtBQUssbUJBQW1CO1lBQ3RCLFlBQVksR0FBRzs7Ozs7Ozs7S0FRaEIsQ0FBQztZQUNBLE1BQU07UUFFUixLQUFLLHVCQUF1QjtZQUMxQixZQUFZLEdBQUc7Ozs7Ozs7Ozs7T0FVZCxDQUFBO1lBQ0QsTUFBTTtRQUNSO1lBQ0UsTUFBTTtLQUNUO0lBR0QsSUFBSSxZQUFZLEVBQUU7UUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUMvQjtBQUNILENBQUM7Ozs7OztBQUlELE1BQU0sVUFBVSxjQUFjLENBQW1CLE9BQXVCO0lBRXRFOzs7OztJQUFPLENBQUMsTUFBVyxFQUFFLEdBQVksRUFBRSxFQUFFOztjQUM3QixJQUFJOzs7O1FBQUcsVUFBVSxLQUFjO1lBQ25DOzs7O1lBQU8sVUFBVSxNQUFPOztzQkFDaEIsVUFBVSxHQUFHLG1CQUFBLG1CQUFBLE1BQU07cUJBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUM7cUJBQ1osSUFBSTs7OztnQkFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssWUFBWSxZQUFZLENBQUMsS0FBSztvQkFDaEQsQ0FBQyxDQUFDLEtBQUssWUFBWSxtQkFBbUIsQ0FBQyxFQUFDLEVBQVcsRUFBeUI7Z0JBRWhGLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2YsWUFBWSxDQUFDLHVCQUF1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bXBvcnQgeyBCb25maXJlU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9ib25maXJlLXN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQm9uZmlyZVN0b3JlIH0gZnJvbSAnLi9ib25maXJlLXN0b3JlLm1vZGVsJztcbmltcG9ydCAqIGFzIG9uQ2hhbmdlIGZyb20gJ29uLWNoYW5nZSc7XG5cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3JzKGVycm9yVHlwZTogQm9uZmlyZVN0b3JlLkVycm9yVHlwZSkge1xuICBsZXQgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIHN3aXRjaCAoZXJyb3JUeXBlKSB7XG4gICAgY2FzZSAnU0VSVklDRV9OT1RfRk9VTkQnOlxuICAgICAgZXJyb3JNZXNzYWdlID0gYFxuICAgICAgSW5qZWN0aW9uIEVycm9yLiBEZWNvcmF0b3IgQ2FuJ3Qgd29yayB3aXRob3V0IGluamVjdGluZyB0aGUgbWFpbiBzdG9yZSBzZXJ2aWNlLlxuXG4gICAgICBFeGFtcGxlOlxuXG4gICAgICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAgID09PT4gcHJpdmF0ZSBib25maXJlU3RvcmVTZXJ2aWNlOiBCb25maXJlU3RvcmVTZXJ2aWNlPHsgY291bnRlcjogbnVtYmVyIH0sIExvY2FsU3RvcmU+XG4gICAgICAgICkgeyB9XG4gICAgYDtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnTE9DQUxfU1RPUkVfTk9UX0ZPVU5EJzpcbiAgICAgIGVycm9yTWVzc2FnZSA9IGBcbiAgICAgIENyZWF0aW9uIEVycm9yLiBMb2NhbCBzdG9yZSBpcyBub3QgZm91bmQuXG5cbiAgICAgIEV4YW1wbGU6XG5cbiAgICAgID09PT4gbG9jYWxTdG9yZSA9IHRoaXMuYm9uZmlyZVN0b3JlU2VydmljZS5jcmVhdGVMb2NhbFN0b3JlKCdTT01FX05BTUUnLCB7IC4uLiB9KTtcblxuICAgICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYm9uZmlyZVN0b3JlU2VydmljZTogQm9uZmlyZVN0b3JlU2VydmljZTx7IGNvdW50ZXI6IG51bWJlciB9LCBMb2NhbFN0b3JlPlxuICAgICAgKSB7IH1cbiAgICAgIGBcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG5cbiAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICB9XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gRnJvbUxvY2FsU3RvcmU8SiA9IGFueSwgVCA9IGFueT4oa2V5TmFtZT86IGtleW9mIFQgfCBhbnkpIHtcblxuICByZXR1cm4gKHRhcmdldDogYW55LCBrZXk6IGtleW9mIFQpID0+IHtcbiAgICBjb25zdCBpbml0ID0gZnVuY3Rpb24gKGlzR2V0OiBib29sZWFuKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKG5ld1ZhbD8pIHtcbiAgICAgICAgY29uc3QgbG9jYWxTdG9yZSA9IE9iamVjdFxuICAgICAgICAgIC52YWx1ZXModGhpcylcbiAgICAgICAgICAuZmluZCh2YWx1ZSA9PiB2YWx1ZSBpbnN0YW5jZW9mIEJvbmZpcmVTdG9yZS5TdG9yZSAmJlxuICAgICAgICAgICAgISh2YWx1ZSBpbnN0YW5jZW9mIEJvbmZpcmVTdG9yZVNlcnZpY2UpKSBhcyB1bmtub3duIGFzIEJvbmZpcmVTdG9yZS5TdG9yZTxUPjtcblxuICAgICAgICBpZiAoIWxvY2FsU3RvcmUpIHtcbiAgICAgICAgICBoYW5kbGVFcnJvcnMoJ0xPQ0FMX1NUT1JFX05PVF9GT1VORCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xuICAgICAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmUuZ2V0JChrZXlOYW1lKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldDogKHZhbDogVCkgPT4ge1xuICAgICAgICAgICAgbG9jYWxTdG9yZS5zZXQkKGtleU5hbWUsIHZhbCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXNHZXQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1trZXldOyAvLyBnZXRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzW2tleV0gPSBuZXdWYWw7IC8vIHNldFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICBnZXQ6IGluaXQodHJ1ZSksXG4gICAgICBzZXQ6IGluaXQoZmFsc2UpLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9O1xufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIEZyb21TdG9yZTxUID0gYW55LCBKID0gYW55PihuYW1lPzoga2V5b2YgVCB8IGFueSkge1xuXG4gIHJldHVybiAodGFyZ2V0OiBhbnksIGtleToga2V5b2YgVCkgPT4ge1xuICAgIGNvbnN0IGluaXQgPSBmdW5jdGlvbiAoaXNHZXQ6IGJvb2xlYW4pIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAobmV3VmFsPykge1xuICAgICAgICBjb25zdCBib25maXJlU2VydmljZSA9IE9iamVjdFxuICAgICAgICAgIC52YWx1ZXModGhpcylcbiAgICAgICAgICAuZmluZCgodmFsdWUpOiBib29sZWFuID0+IHZhbHVlIGluc3RhbmNlb2YgQm9uZmlyZVN0b3JlU2VydmljZSkgYXMgdW5rbm93biBhcyBCb25maXJlU3RvcmVTZXJ2aWNlPFQsIEo+O1xuXG4gICAgICAgIGlmICghYm9uZmlyZVNlcnZpY2UpIHtcbiAgICAgICAgICBoYW5kbGVFcnJvcnMoJ1NFUlZJQ0VfTk9UX0ZPVU5EJyk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgIG5hbWUgPSBrZXk7XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XG4gICAgICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYm9uZmlyZVNlcnZpY2UuZ2V0JChuYW1lKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldDogKHZhbDogVCkgPT4ge1xuICAgICAgICAgICAgYm9uZmlyZVNlcnZpY2Uuc2V0JChuYW1lLCB2YWwpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGlzR2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXNba2V5XTsgLy8gZ2V0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpc1trZXldID0gbmV3VmFsOyAvLyBzZXRcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgZ2V0OiBpbml0KHRydWUpLFxuICAgICAgc2V0OiBpbml0KGZhbHNlKSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfTtcbn1cbiJdfQ==