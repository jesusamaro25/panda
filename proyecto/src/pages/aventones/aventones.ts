import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserProfilePage } from '../user-profile/user-profile';

/**
 * Generated class for the AventonesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aventones',
  templateUrl: 'aventones.html',
})
export class AventonesPage {

  form: FormGroup;
  postDetails: any[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    formBuilder: FormBuilder) {

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

  


      
  visitarPerfil(){
    this.navCtrl.push(UserProfilePage);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['image'].value + ')'
  }

  processWebImage(event) {

    let reader = new FileReader();

    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({'image': imageData});

    };

    reader.readAsDataURL(event.target.files[0]);
  }

  enviarSolicitudAventon(){
    swal({text: "¿Desea solicitar aventón?", buttons: ['Cancel', 'Ok'] })
          .then((solicitar) => {
            if (solicitar) {
              swal("Tu solicitud ha sido enviada", {
              icon: "success",
        });
      } 
    });
  }
  
            
  
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad AventonesPage');
  }

}
