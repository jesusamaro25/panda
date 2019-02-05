import { UserProfilePage } from './../user-profile/user-profile';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import {Component} from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';


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
  id_user:any;
  value:any;
  id_logged_user:any;
  value2:any;
  seguidor:any;
  follow:any;
  followdata:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl: ModalController,private alertCtrl: AlertController,
              public authService: AuthServiceProvider) { //INICIO CONSTRUCTOR
      //--------------------------------Parametros del NavBar-----------------
      this.value = navParams;
      this.id_logged_user = this.value.data.item;
      
      //-------------------------------------------------------------------------
      //--------------DATO DEL USUARIO LOGGEADO------------------
      const data= JSON.parse(localStorage.getItem('userData'));
      this.id_user=data._id.$oid; 
      console.log(this.id_user);
      //-----------------------------------------------------------
      this.followdata={"follower_id":this.id_user , "following_id": this.id_logged_user }
       
   

      //---------------------------------------------------------------------------------------
    
  }

  //-------------------------FIN CONSTRUCTOR ---------------------------------------------

seguir(){
console.log(this.followdata);
this.authService.postData(this.followdata,'follows').then((result)=>{
swal("¡Listo!", "Haz seguido a este usuario", "success");
})
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