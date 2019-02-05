import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Camera} from '@ionic-native/camera'; //Para instalar usar el comando npm install --save @ionic-native/camera
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { MenuprofilePage } from '../menuprofile/menuprofile';

@IonicPage()
@Component({
  selector: 'page-editar-profile',
  templateUrl: 'editar-profile.html',
})

export class EditarProfilePage {
  @ViewChild('fileInput') fileInput;   
  form: FormGroup;
  
  user: any;
  resposeData: any;
  logged_user_id: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              formBuilder: FormBuilder, 
              public camera: Camera,   
              public authService: AuthServiceProvider) 
  { //--------------------------------INICIO CONSTRUCTOR -------------------------------
    this.form = formBuilder.group({
      image: [''], user_name: [''], user_password: [''], user_email: [''], user_state: [''],
    });
    const data= JSON.parse(localStorage.getItem('userData'));   
    this.logged_user_id = data._id.$oid;
    this.user={"name":data.name,"lastname":data.lastname,"bio":data.bio,"photo":data.photo};
    
    
  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarProfilePage');
  }

  update(){
   
    
    this.authService.putData(this.user,"users/",this.logged_user_id).then((result)=>{

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

  //-------------------------------------FUNCIONES DE LA FOTO---------------------------------------------
  getPicture() { 
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({'image': 'data:image/jesusamdsfgaro.png' + data});
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
        this.user={"photo":this.form.controls['image'].value}
        //this.update({"photo":this.form.controls['image'].value})
  
  
      };
      reader.readAsDataURL(event.target.files[0]); 
  
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['image'].value + ')'
  }

  
 /*update(foto){

    
  this.authService.putData(foto,"users/",this.logged_user_id).then((result)=>{

    this.resposeData=result;
    console.log(this.resposeData);
    localStorage.setItem('userData',JSON.stringify(this.resposeData))
    this.navCtrl.setRoot(MenuprofilePage);

  },(err)=>{


  });
*/
}



  






  

