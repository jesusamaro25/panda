import { TimelinePage } from './../timeline/timeline';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  userData={"username":"Seikuro3","password":"","name":"","lastname":"","bio":""}
  resposeData: any;

  constructor(public navCtrl: NavController,public authService: AuthServiceProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  registro(){

    
    this.authService.postRegistro(this.userData,"users").then((result)=>{

      this.resposeData=result;
      console.log(this.resposeData);
      localStorage.setItem('userData',JSON.stringify(this.resposeData))
      swal("¡Listo!", "Bienvenido a la familia Panda", "success");
      this.navCtrl.push(TimelinePage);

    },(err)=>{


    });

  }
}
