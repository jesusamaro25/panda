import { UserProfilePage } from './../user-profile/user-profile';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import {Component} from '@angular/core';
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
  id_profile_user:any;
  value2:any;
  seguidor:any;
  follow:any;
  count: number;
  followdata:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl: ModalController,private alertCtrl: AlertController,
              public authService: AuthServiceProvider) { //INICIO CONSTRUCTOR
      //--------------------------------Parametros del NavBar-----------------
      this.value = navParams;
      this.id_profile_user = this.value.data.item;
      //-------------------------------------------------------------------------
      //--------------DATO DEL USUARIO LOGGEADO------------------
      const data= JSON.parse(localStorage.getItem('userData'));
      this.id_user=data._id.$oid; 
      console.log(this.id_user);
      //-----------------------------------------------------------
      this.followdata={"follower_id":this.id_user , "following_id": this.id_profile_user }

      this.checkFollow();
       
   

      //---------------------------------------------------------------------------------------
    
  }

  //-------------------------FIN CONSTRUCTOR ---------------------------------------------

  seguir(){

    console.log(this.followdata);

    this.authService.postData(this.followdata,'follows').then((result)=>{

      swal("¡Listo!", "Has seguido a este usuario", "success");
      this.checkFollow();

    })
  }

  checkFollow(){

    this.authService.getDataByTwoParams("checkfollow","follower_id",this.id_user,"following_id",this.id_profile_user).then((data) =>{

      this.follow = data;
      console.log(this.follow);  
      this.count=this.follow.length;
      console.log(this.count);
      console.log("el follow va antes");                      
      
    });

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuUserPage');
  }

  abrirRating(){
    const modal = this.modalCtrl.create('RatingPage');
    modal.present();
  }

  dejarDeSeguir(){

    swal({text: "¿Seguro que deseas dejar de seguir a este usuario?", buttons: ['Cancel', 'Ok'] }).then((solicitar) => {

        if (solicitar) {

          this.authService.deleteDataByID('follows/',this.follow[0]._id.$oid).then((result)=>{

            swal("¡Listo!", "Has dejado de seguir a este usuario", "success");
            this.checkFollow();
      
          })

        } 

      });
  }

  alerta() {
    let alert = this.alertCtrl.create({
      title: '¿Por qué deseas denunciar a este usuario?',
      inputs: [
        {
          name: 'denuncia',
          placeholder: 'explica acá lo sucedido'
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