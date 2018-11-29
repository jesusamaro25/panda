import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AventonesPage } from './aventones';

@NgModule({
  declarations: [
    AventonesPage,
  ],
  imports: [
    IonicPageModule.forChild(AventonesPage),
  ],
})
export class AventonesPageModule {}
