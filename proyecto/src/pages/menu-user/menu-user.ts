import { RegistroPage } from './../registro/registro';
import { UserProfilePage } from './../user-profile/user-profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the MenuUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-user',
  templateUrl: 'menu-user.html',
})
export class MenuUserPage {

  rootPage = UserProfilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuUserPage');
  }

  abrirRating(){
    const modal = this.modalCtrl.create('RatingPage');
    modal.present();
  }

}
