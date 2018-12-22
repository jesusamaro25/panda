import { TimelinePage } from './../timeline/timeline';
import { SolicitudesPage } from './../solicitudes/solicitudes';
import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, ViewController, ToastController, LoadingController, ToastOptions, App} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import { ModalController} from 'ionic-angular';
import { EditarProfilePage } from '../editar-profile/editar-profile';
import { HomePage } from '../home/home';

import {Camera} from '@ionic-native/camera'; //Para instalar usar el comando npm install --save @ionic-native/camera
import { Dialogs } from '@ionic-native/dialogs'; //Para instalar usar comandos ionic cordova plugin add cordova-plugin-dialogs y luego npm install --save @ionic-native/dialogs. Luego se debe añadir el componente al App module
//import { ModalPage } from '../modal/modal';

@IonicPage()
@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  @ViewChild('fileInput') fileInput;
  //isReadyToSave: boolean;
  item: any; 
  form: FormGroup;
  profileDetails: any[];
  //followers = Followers;
  publicaciones: any[]=['Cabudare','Barquisimeto','Manzano'];
  //publicacionPage = PublicacionPage;
  private isDisabled: boolean = true;
  private caption_name: string = "EDIT";
  //-------------------PRUEBA VARIABLE
  toastOptions: ToastOptions; 
  
  
  account: {
    user_name: string, user_email: string, user_password: string, user_state: string, profile_image: string,
    full_name: string, about: string
  } = {
    user_name: 'jesusamaro_', 
    user_email: 'jesusamaro1995@gmail.com',
    user_password: 'password',
    user_state: 'Lara',
    profile_image: 'asset/img/src/jesusamaro.png',  
    full_name: 'Jesús Amaro',
    about: 'Estudiante de Ing. Informática IX Semestre, aspirante a la Promo 59'
  };

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder, public camera: Camera,
              
              public toastCtrl: ToastController, public loadingCtrl: LoadingController,public modalCtrl: ModalController, private dialogs: Dialogs
              ,public appCtrl: App)
              
              {

    this.form = formBuilder.group({
      image: [''], user_name: [''], user_password: [''], user_email: [''], user_state: [''],
    });

    
    //Aqui se guardan los objetos json dentro del arreglo profile Details
    this.profileDetails = [
      {
        full_name: "Jesús Amaro",
        about: "Estudiante de Ing. Informática IX Semestre, aspirante a la Promo 59.",
        followers: 230,
        following: 170,
        post: "Saliendo del DCyT. Voy hasta el sambil."
      },
      {
        full_name: "Jesús Amaro",
        about: "Estudiante de Ing. Informática IX Semestre, aspirante a la Promo 59.",
        followers: 0,
        following: 170,
        post: "No tuve clases, me voy de una pero tengo que echar gasolina primero. Quien no tenga problemas en acompañarme puede venirse. Llego hasta la Catedral"
      }
    ];

  }

  openFollowers() {
    this.navCtrl.push('Followers');
  }

  openFollowing() {
    this.navCtrl.push('Following');
  }

 mensaje(){
  this.dialogs.alert('Hello world')
  .then(() => console.log('Dialog dismissed'))
  .catch(e => console.log('Error displaying dialog', e));    
 }

 

  ionViewDidLoad() {
  }

  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({'image': 'data:image/jesusamaro.png' + data});
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({'image': imageData});
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['image'].value + ')'
  }

 irSolicitudes(){
  this.appCtrl.getRootNav().push(SolicitudesPage);
 }
 EditarPerfil() {
  this.navCtrl.push(EditarProfilePage);
}
CerrarSesion(){
  //this.navCtrl.push(HomePage);
  document.write("Has cerrado sesión de manera exitosa");
}
NotificacionCerrarSesion(){
  swal({text: "¿Seguro que deseas cerrar sesión?", buttons: ['Cancel', 'Ok'] })
   .then((solicitar) => {
if (solicitar) {
  swal("¡Hasta la próxima!", {
    icon: "success",
  });
  setTimeout(this.CerrarSesion, 3000);
  //this.navCtrl.push(HomePage);
} 
});
}

 goBack() {
  this.navCtrl.pop();
 } 
 
}
