import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarProfilePage } from './editar-profile';

@NgModule({
  declarations: [
    EditarProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(EditarProfilePage),
  ],
})
export class EditarProfilePageModule {}
