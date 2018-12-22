import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuUserPage } from './menu-user';

@NgModule({
  declarations: [
    MenuUserPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuUserPage),
  ],
})
export class MenuUserPageModule {}
