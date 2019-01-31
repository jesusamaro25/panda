import { MenuUserPage } from './../menu-user/menu-user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
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
  postDetails: any;
  public user: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    formBuilder: FormBuilder,
    public authService: AuthServiceProvider) {

      const data= JSON.parse(localStorage.getItem('userData'));
      this.user=data;

      this.authService.getDataByOneParam("searchallpost","username",this.user.username).then((data) =>{

        this.postDetails=data;
        console.log(this.postDetails);

      })

      this.form = formBuilder.group({
        image: [''],
        user_name: [''],
        user_password: [''], 
        user_email: [''],
        user_state: [''],}); //SIN ESTO NO SE VE NADA





  }

  


      
  visitarPerfil(id){
    this.navCtrl.push(MenuUserPage,{item:id});
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
