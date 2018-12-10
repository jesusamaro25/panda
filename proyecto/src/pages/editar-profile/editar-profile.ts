import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Camera} from '@ionic-native/camera'; //Para instalar usar el comando npm install --save @ionic-native/camera
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
  constructor(public navCtrl: NavController, public navParams: NavParams, formBuilder: FormBuilder, public camera: Camera,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarProfilePage');
  }
  regi(){
    alert("Perfil editado");
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
