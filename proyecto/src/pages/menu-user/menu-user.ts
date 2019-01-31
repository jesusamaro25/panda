import { UserProfilePage } from './../user-profile/user-profile';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import {Component} from '@angular/core';


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
  value:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,private alertCtrl: AlertController) {

      this.value = navParams;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuUserPage');
  }

  abrirRating(){
    const modal = this.modalCtrl.create('RatingPage');
    modal.present();
  }

  dejarDeSeguir(){
    swal({text: "¿Seguro que deseas dejar de seguir a este usuario?", buttons: ['Cancel', 'Ok'] })
     .then((solicitar) => {
        if (solicitar) {
          swal("Haz dejado de seguir a este usuario", {
            icon: "success",
        });
      } 
    });
  }

  alerta() {
    let alert = this.alertCtrl.create({
      title: '¿Por qué deseas denunciar a este usuario?',
      inputs: [
        {
          name: 'denuncia',
          placeholder: 'echa el cuento'
        },
       
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            swal("Entendido...", "Tu denuncia está siendo procesada", "success");
          }
        }
      ]    
    }); 
     alert.present();
  }

  activarNotificaciones()
  {
     swal({text: "¿Deseas recibir una notificación cuando este usuario haga un post?", buttons: ['Cancel', 'Ok'] })
      .then((solicitar) => {
        if (solicitar) {
          swal("Recibirás una notificación cada vez que este usuario realice un post", {
            icon: "success",
          });
        } 
      });
  }

}
