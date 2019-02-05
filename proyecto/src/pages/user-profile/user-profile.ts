import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, ViewController, LoadingController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";

//------------PARA USAR MODAL
import { ModalController} from 'ionic-angular';
//------------FIN PARA USAR MODAL-
import {Camera} from '@ionic-native/camera'; //Para instalar usar el comando npm install --save @ionic-native/camera
import { Dialogs } from '@ionic-native/dialogs'; //Para instalar usar comandos ionic cordova plugin add cordova-plugin-dialogs y luego npm install --save @ionic-native/dialogs. Luego se debe añadir el componente al App module
import { GlobalProvider } from "../../providers/global/global";
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';

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
  profileDetails: any;
  value: any;
  public user: any;
  postDetails: any;
  seguidor:any;
  //followers = Followers;
  
  //publicacionPage = PublicacionPage;
  //-------------------PRUEBA VARIABLE
  
  

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder, public camera: Camera,
              
              public loadingCtrl: LoadingController,

              public modalCtrl: ModalController, private dialogs: Dialogs,

              public global:GlobalProvider,

              public navParams: NavParams,

              public authService: AuthServiceProvider){

    this.value = navParams.get('item');
    console.log(this.value);


              

    this.form = formBuilder.group({
      image: [''], user_name: [''], user_password: [''], user_email: [''], user_state: [''],
    });


    //Aqui se guardan los objetos json dentro del arreglo profile Details
    this.profileDetails = [
      {
        full_name: "",
        about: "",
        followers: "",
        following: "",
        post: ""
      }
    ];

   

    this.authService.getDataByID("users/",this.value).then((data) =>{

      this.profileDetails=data;
      console.log('AJA FIJATE AQUI');
      console.log('----------  DATA ------------');
      console.log(data); 

      console.log(this.profileDetails.username);

      this.authService.getDataByOneParam("postByUser","username",this.profileDetails.username).then((data) =>{

        this.postDetails=data;
        
        console.log(this.postDetails);
  
      })

    })



    const data= JSON.parse(localStorage.getItem('userData'));
    this.user=data;



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