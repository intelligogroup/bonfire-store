import { ModuleWithProviders, NgModule } from '@angular/core';
import { BonfireStore } from './bonfire-store.model';
import { BonfireStoreComponent } from './bonfire-store.component';


// @dynamic
@NgModule({
  declarations: [BonfireStoreComponent],
  imports: [
  ],
  exports: [BonfireStoreComponent]
})


export class BonfireStoreModule {
  static forRoot(useValue: BonfireStore.StoreData = {}): ModuleWithProviders<BonfireStoreModule> {
    return {
      ngModule: BonfireStoreModule,
      providers: [
        { provide: BonfireStore.BONFIRE_CONFIG, useValue }
      ],
    };
  }
}
