import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, ViewController, ToastController, LoadingController, ToastOptions} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import { ModalController} from 'ionic-angular';
import {Camera} from '@ionic-native/camera'; //Para instalar usar el comando npm install --save @ionic-native/camera
import { Dialogs } from '@ionic-native/dialogs';
import { ProfilePage } from '../profile/profile';  //Para instalar usar comandos ionic cordova plugin add cordova-plugin-dialogs y luego npm install --save @ionic-native/dialogs. Luego se debe añadir el componente al App module
import swal from 'sweetalert';

@IonicPage()
@Component({
  selector: 'timeline-page',
  templateUrl: 'timeline.html'
})
export class TimelinePage {
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
              
              public toastCtrl: ToastController, public loadingCtrl: LoadingController,public modalCtrl: ModalController, private dialogs: Dialogs)
              
              {

              		swal("Bienvenido");

//PRUEBA METODO TOAST 
this.toastOptions={
  message: 'Bienvenido',
  duration: 3000,
}
    this.form = formBuilder.group({
      image: [''], user_name: [''], user_password: [''], user_email: [''], user_state: [''],
    });
    //this.toastPrueba();  Aqui es el toast de bienvenido que se sustituyó por el sweet alert

    
    //Aqui se guardan los objetos json dentro del arreglo profile Details
    this.profileDetails = [
      {
        full_name: "Felipe Gonzalez",
        about: "Estudiante de Ing. Informática IX Semestre, aspirante a la Promo 59.",
        followers: 230,
        following: 170,
        post: "Voy para mi casa por Santa Elena"
      },
      {
        full_name: "Francisco Sánchez",
        about: "Estudiante de Ing. Informática IX Semestre, aspirante a la Promo 59.",
        followers: 0,
        following: 170,
        post: "Bajo para cabudare"
      }
    ];

  }


  verPerfil(){

    this.navCtrl.push(ProfilePage); 
    
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

 enviarSolicitudAventon()
 {
 	swal("Aventón solicitado","Tu solicitud de aventón ha sido enviada, mantente atento a tus notificaciones","success");
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
 //PRUEBA TOAST
 toastPrueba(){
this.toastCtrl.create(this.toastOptions).present();
 }
 
}
