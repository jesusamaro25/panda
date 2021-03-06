import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, ViewController, LoadingController} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";

//------------PARA USAR MODAL
import { ModalController} from 'ionic-angular';
//------------FIN PARA USAR MODAL-
import {Camera} from '@ionic-native/camera'; //Para instalar usar el comando npm install --save @ionic-native/camera
import { Dialogs } from '@ionic-native/dialogs'; //Para instalar usar comandos ionic cordova plugin add cordova-plugin-dialogs y luego npm install --save @ionic-native/dialogs. Luego se debe añadir el componente al App module
import { GlobalProvider } from "../../providers/global/global";

@IonicPage()
@Component({
  selector: 'user-profile-page',
  templateUrl: 'user-profile.html'
})
export class UserProfilePage {
  @ViewChild('fileInput') fileInput;
  //isReadyToSave: boolean;
  item: any; 
  form: FormGroup;
  profileDetails: any[];
  //followers = Followers;
  
  //publicacionPage = PublicacionPage;
  //-------------------PRUEBA VARIABLE
  
  
  account: {
    user_name: string, user_email: string, user_password: string, user_state: string, profile_image: string,
    full_name: string, about: string
  } = {
    user_name: 'jesusamaro_', 
    user_email: 'jesusamaro1995@gmail.com',
    user_password: 'password',
    user_state: 'Lara',
    profile_image: 'asset/img/src/felipe.png',  
    full_name: 'José Felipe',
    about: 'Graduando de la promo 58 Ing Informática.'
  };

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder, public camera: Camera,
              
              public loadingCtrl: LoadingController,

              public modalCtrl: ModalController, private dialogs: Dialogs,

              public global:GlobalProvider)
              
              {
              

    this.form = formBuilder.group({
      image: [''], user_name: [''], user_password: [''], user_email: [''], user_state: [''],
    });


    //Aqui se guardan los objetos json dentro del arreglo profile Details
    this.profileDetails = [
      {
        full_name: "José Felipe",
        about: "Graduando de la promo 58 Ing Informática.",
        followers: 230,
        following: 170,
        post: "Saliendo del DCyT. Voy hasta el sambil."
      },
      {
        full_name: "José Felipe", 
        about: "Graduando de la promo 58 Ing Informática.",
        followers: 0,
        following: 170,
        post: "No tuve clases, me voy de una pero tengo que echar gasolina primero. Quien no tenga problemas en acompañarme puede venirse. Llego hasta la Catedral"
      }
    ];

  }

//Para usar modal, genero un page que será el modal, importo ModalController al ts donde se tendrá la función que llamara al modal
// y se crea una constante = modalCtrl.create('PaginaModal') y luego se usa el metodo present
  abrirRating(){
    this.navCtrl.push('RatingPage');
    
  }


rating()
{
  swal("rating");
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

  back(){
    this.navCtrl.pop();
  }

  enviarSolicitudAventon()
  {
   swal({text: "¿Desea solicitar aventón?", buttons: ['Cancel', 'Ok'] })
     .then((solicitar) => {
       if (solicitar) {
         swal("Tu solicitud ha sido enviada", {
           icon: "success",
         });
       } 
   });
  }


}
