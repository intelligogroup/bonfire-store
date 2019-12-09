import { BonfireStore } from '../bonfire-store.model';

export default function handleErrors(errorType: BonfireStore.ErrorType) {
  let errorMessage: string;
  switch (errorType) {
    case 'SERVICE_NOT_FOUND':
      errorMessage = `
      Injection Error. Decorator Can't work without injecting the main store service.

      Example:

        constructor(
          ===> private bonfireStoreService: BonfireStoreService<MainStore, LocalStore>
        ) { }
    `;
      break;

    case 'LOCAL_STORE_NOT_FOUND':
      errorMessage = `
      Creation Error. Local store is not found.

      Example:

      ===> @LocalStore() localStore = { ... }

        constructor(
          private bonfireStoreService: BonfireStoreService<MainStore, LocalStore>
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

