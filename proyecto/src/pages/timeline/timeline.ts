import { MenuprofilePage } from './../menuprofile/menuprofile';
import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, ViewController, ToastController, LoadingController, ToastOptions} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import { ModalController} from 'ionic-angular';
import {Camera} from '@ionic-native/camera'; //Para instalar usar el comando npm install --save @ionic-native/camera
import { PublicarPostPage } from '../publicar-post/publicar-post';  //Para instalar usar comandos ionic cordova plugin add cordova-plugin-dialogs y luego npm install --save @ionic-native/dialogs. Luego se debe añadir el componente al App module
import swal from 'sweetalert';
import { MenuUserPage } from '../menu-user/menu-user';
import { AlertController } from 'ionic-angular';

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
  //-------------------PRUEBA VARIABLE
  toastOptions: ToastOptions; 
  
  constructor(public navCtrl: NavController, 
              public viewCtrl: ViewController,
              formBuilder: FormBuilder, 
              public camera: Camera,            
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              public modalCtrl: ModalController, 
              public alertCtrl: AlertController)
{
  
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

    this.navCtrl.push(MenuprofilePage); 
    
  }

  publicarPost(){

    this.navCtrl.push(PublicarPostPage); 
    
  }

  visitarPerfil(){
    this.navCtrl.push(MenuUserPage);
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

  redactarPost() {
  let alert = this.alertCtrl.create({
    title: '¿A Donde vamos?',
    inputs: [
      {
        name: 'post',
        placeholder: '¡Puede que hoy ayudes mucho a alguien!'
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
          swal("¡Listo!", "Gracias por tu disposición", "success");
        }
      }
    ]    
  }); 
   alert.present();
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


 
