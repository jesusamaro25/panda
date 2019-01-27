import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { TimelinePage } from '../timeline/timeline';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userData={"username":"","password":""}
  resposeData: any;
  public user: any;

  constructor(public navCtrl: NavController,public authService: AuthServiceProvider) {

  }



  login(){

    this.authService.postData(this.userData,"login").then((result)=>{

      this.resposeData=result;
      console.log(this.resposeData);
      localStorage.setItem('userData',JSON.stringify(this.resposeData))
      this.user=JSON.parse(localStorage.getItem('userData'));
      this.navCtrl.push(TimelinePage);



    },(err)=>{

      swal("¡Error!", "Introdujiste mal tu usuario o contraseña", "error");

    });

  }

  goRegister(){
    this.navCtrl.push(RegistroPage);
  }

}
