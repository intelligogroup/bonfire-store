import { Component } from '@angular/core';
import { BonfireStoreService } from './bonfire-store.service';
import { BonfireStore } from './bonfire-store.model';

@Component({
  selector: 'false-bonfire-store',
  template: ``,
  styles: []
})
export class BonfireStoreComponent<T = any, J = any> implements BonfireStore.StoreComponent<J> {

  constructor(
    private serviceStore: BonfireStoreService<T, J>
  ) { }

  createLocalStore(initialValue: J) {
    return this.serviceStore.createLocalStore(initialValue);
  }

}
