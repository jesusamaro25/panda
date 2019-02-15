import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RatingPage } from './rating';
import { Ionic2RatingModule } from 'ionic2-rating'; 
//import { ComponentsModule } from '../components/components.module'; //necesario para que funcione el decorador componente
import { ComponentsModule } from '../../components/components.module'; //necesario para que funcione el decorador componente


@NgModule({
  declarations: [
    RatingPage,
  ],
  imports: [
    IonicPageModule.forChild(RatingPage),
    Ionic2RatingModule,
    ComponentsModule

  ],
  schemas: [
        
      ]
})
export class RatingPageModule {}
