import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataFormModalPage } from './data-form-modal';

@NgModule({
  declarations: [
    DataFormModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DataFormModalPage)
  ],
})
export class DataFormModalPageModule {}
