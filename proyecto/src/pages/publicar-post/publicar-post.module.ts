import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicarPostPage } from './publicar-post';

@NgModule({
  declarations: [
    PublicarPostPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicarPostPage),
  ],
})
export class PublicarPostPageModule {}
