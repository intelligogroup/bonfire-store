import { Component, OnInit } from '@angular/core';
import { Store } from './app.module';
import { FromStore, BonfireStore, BonfireStoreService, toJS } from 'bonfire-store';
import { Food } from './table/table-datasource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bonfire-store-app';
  @FromStore('food') food$: BonfireStore.FromStore<Food>;


  constructor(
    private storeService: BonfireStoreService<Store>
  ) { }

  ngOnInit() {
    try {
      const store = JSON.parse(localStorage.getItem('store'));
      if (store) {
        this.storeService.store = store;
      }
    } catch (e) {
      console.log('No value in local storage');

    }
  }

  saveData() {
    const { store } = this.storeService;
    const storeJs = toJS(store);
    localStorage.setItem('store', JSON.stringify(storeJs));
  }
}
