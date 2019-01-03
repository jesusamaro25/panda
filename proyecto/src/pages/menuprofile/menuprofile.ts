import { EditarProfilePage } from './../editar-profile/editar-profile';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menuprofile',
  templateUrl: 'menuprofile.html',
})
export class MenuprofilePage {

  rootPage = ProfilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuprofilePage');
  }

  goEdit(){
    this.navCtrl.push(EditarProfilePage);
  }

}
