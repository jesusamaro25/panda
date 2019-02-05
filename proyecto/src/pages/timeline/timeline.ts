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
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

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
  postDetails: any;
  requestData:any;
  //-------------------PRUEBA VARIABLE
  toastOptions: ToastOptions; 

  public user: any;
  logged_user_id:any;
  constructor(public navCtrl: NavController, 
              public viewCtrl: ViewController,
              
              public camera: Camera,            
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              public modalCtrl: ModalController, 
              public alertCtrl: AlertController,
              public authService: AuthServiceProvider)
{  //-------------------------------------------INICIO COSNTRUCTOR-----------------------------------------------------

  const data= JSON.parse(localStorage.getItem('userData'));
  this.user=data;
 

  
  this.authService.getDataByOneParam("timeline","username",this.user.username).then((data) =>{

    this.postDetails = data;
    console.log('POM RAK KUN'); 
    console.log(this.postDetails);
    												
    
  });
  
 
 
    
    

    			

}  //-------------------------------------------FIN COSNTRUCTOR-----------------------------------------------------

enviarSolicitudAventon(id_post, id_autor)
{
  
this.requestData = {"solicitante_id": this.logged_user_id,"solicitado_id": id_autor,"post_id": id_post};
 swal({text: "¿Desea solicitar aventón?", buttons: ['Cancel', 'Ok'] })
   .then((solicitar) => {
     if (solicitar) {
       this.authService.postData(this.requestData,"requests").then((result)=>{

         swal("¡Listo!", "Bienvenido a la familia Panda", "success");
         this.navCtrl.push(TimelinePage);
     
       },(err)=>{
     
     
       });
       swal("Tu solicitud ha sido enviada", {
         icon: "success",
       });
     } 
 });
}


  verPerfil(){

    this.navCtrl.setRoot(MenuprofilePage); 
    
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


 
