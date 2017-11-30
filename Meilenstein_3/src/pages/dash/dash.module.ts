import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashPage } from './dash';
//Components
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DashPage
  ],
  imports: [
    IonicPageModule.forChild(DashPage),
    ComponentsModule
  ],
})
export class DashPageModule {}
