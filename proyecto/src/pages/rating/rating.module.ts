import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RatingPage } from './rating';
import { Ionic2RatingModule } from 'ionic2-rating'; 

@NgModule({
  declarations: [
    RatingPage,
  ],
  imports: [
    IonicPageModule.forChild(RatingPage),

  ],
  schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
})
export class RatingPageModule {}
