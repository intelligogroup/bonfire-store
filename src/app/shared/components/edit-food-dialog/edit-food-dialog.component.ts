import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BonfireStoreService, LocalStore, BonfireStore } from 'bonfire-store';
import { Store } from '../../../app.module';
import { Food } from '../../../table/table-datasource';

interface ILocalStore {
  form: FormGroup;
  shouldDelete: boolean;
}
// const initValue: ILocalStore =

@Component({
  templateUrl: './edit-food-dialog.component.html',
  styleUrls: ['./edit-food-dialog.component.scss']
})
export class EditFoodDialogComponent implements OnInit {
  @LocalStore() state: BonfireStore.LocalStore<ILocalStore> = {
    form: null,
    shouldDelete: false
  };

  constructor(
    public dialogRef: MatDialogRef<EditFoodDialogComponent>,
    private storeService: BonfireStoreService<Store, ILocalStore>,
    @Inject(MAT_DIALOG_DATA) public data: { food: Food, index: number }
  ) {
  }

  ngOnInit() {
    this.state.set$('form', new FormGroup({
      name: new FormControl(this.data.food.name || '', [Validators.required]),
      desc: new FormControl(this.data.food.desc || '', [Validators.required])
    }));
  }

  submit() {
    const { form } = this.state.store;
    this.storeService.store.food[this.data.index] = form.value;
    this.dialogRef.close();
  }

  delete() {
    const { food } = this.storeService.store;
    food.splice(this.data.index, 1);
    this.dialogRef.close();

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
