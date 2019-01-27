import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Camera} from '@ionic-native/camera'; //Para instalar usar el comando npm install --save @ionic-native/camera
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { MenuprofilePage } from '../menuprofile/menuprofile';
/**
 * Generated class for the EditarProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-profile',
  templateUrl: 'editar-profile.html',
})
export class EditarProfilePage {
  @ViewChild('fileInput') fileInput;
  form: FormGroup;
  public user: any;
  userData={"name":"","lastname":"","bio":""}
  resposeData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     formBuilder: FormBuilder, public camera: Camera,public authService: AuthServiceProvider) {
    
    const data= JSON.parse(localStorage.getItem('userData'));
    this.user=data;


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarProfilePage');
  }

  update(){

    
    this.authService.putData(this.userData,"users/",this.user._id.$oid).then((result)=>{

      this.resposeData=result;
      console.log(this.resposeData);
      localStorage.setItem('userData',JSON.stringify(this.resposeData))
      this.navCtrl.setRoot(MenuprofilePage);

    },(err)=>{


    });

  }
  
  guardarCambios(){
    swal({text: "¿Seguro que deseas guardar los cambios?", buttons: ['Cancel', 'Ok'] })
     .then((solicitar) => {
  if (solicitar) {

    this.update();
    swal("Los cambios han sido guardados de manera exitosa", {
      icon: "success",
    });

  } 
  });
  }
  /*getPicture() {
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
  */
 /* getProfileImageStyle() {
    return 'url(' + this.form.controls['image'].value + ')'
  }
  */
}
