import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, ViewController, ToastController, LoadingController, ToastOptions} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import { ModalController} from 'ionic-angular';
import {Camera} from '@ionic-native/camera'; //Para instalar usar el comando npm install --save @ionic-native/camera
import { Dialogs } from '@ionic-native/dialogs';
import { ProfilePage } from '../profile/profile';  //Para instalar usar comandos ionic cordova plugin add cordova-plugin-dialogs y luego npm install --save @ionic-native/dialogs. Luego se debe añadir el componente al App module
import { UserProfilePage } from '../user-profile/user-profile'
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
 // profileDetails: any[];
  postDetails: any[];
 
  private isDisabled: boolean = true;
  private caption_name: string = "EDIT";
  //-------------------PRUEBA VARIABLE
  toastOptions: ToastOptions; 
  
  constructor(public navCtrl: NavController, 
              public viewCtrl: ViewController,
              formBuilder: FormBuilder, 
              public camera: Camera,            
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              public modalCtrl: ModalController, 
              private dialogs: Dialogs,)
              
{

  swal("Bienvenido");
  this.form = formBuilder.group({
                            image: [''],
      											user_name: [''],
      											user_password: [''], 
      											user_email: [''],
      											user_state: [''],}); //SIN ESTO NO SE VE NADA
  this.postDetails = [    
      				{
        				full_name: "Felipe Gonzalez",
        				about: "Estudiante de Ing. Informática IX Semestre, aspirante a la Promo 59.",
        				followers: 230,
        				pic: "../../assets/img/felipe.png", 
        				post: "Voy para mi casa por Santa Elena"
      				},
				      {
				        full_name: "Francisco Sánchez",
				        about: "Estudiante de Ing. Informática IX Semestre, aspirante a la Promo 59.",
				        followers: 0,
				        following: 170,
				        pic: "../../assets/img/francisco.png", 
				        post: "Bajo para cabudare" 
				      }
    												];
    
    

    			

}


  verPerfil(){

    this.navCtrl.push(ProfilePage); 
    
  }


  visitarPerfil(){
    this.navCtrl.push(UserProfilePage);
  }


    openFollowers() {
    this.navCtrl.push('Followers');
  }

  openFollowing() {
    this.navCtrl.push('Following');
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




 /* getPicture() {
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
  }*/

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


 
