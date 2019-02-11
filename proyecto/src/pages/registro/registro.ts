import { HomePage } from './../home/home';
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

  userData={"username":"","password":"","name":"","lastname":"","bio":"","photo":"../../assets/img/profile.png"}
  resposeData={"username":"","password":"","name":"","lastname":"","bio":""};
  newuser: any;

  constructor(public navCtrl: NavController,public authService: AuthServiceProvider) {
    
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad RegistroPage');
  }

  registro(){

    this.authService.postData(this.userData,"users").then((result)=>{

      localStorage.setItem('userData',JSON.stringify(this.resposeData));
      swal("¡Listo!", "Bienvenido a la familia Panda", "success");
      localStorage.setItem('userData',JSON.stringify(this.resposeData))
      this.navCtrl.setRoot(HomePage);

    },(err)=>{


    });
  

  }
}
