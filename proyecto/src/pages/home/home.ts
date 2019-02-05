import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { TimelinePage } from '../timeline/timeline';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import {} from ''

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userData={"username":"","password":""}
  resposeData: any;
  public user: any;

  constructor(public navCtrl: NavController,
              public authService: AuthServiceProvider,
              public loading: LoadingController) {

  }



  login(){
    
    let loadingmessage = this.loading.create({
      spinner: 'hide',
      content: `<img src="assets/img/loading.gif" />`,
      duration: 5000
    });

    loadingmessage.present();
    this.authService.postData(this.userData,"login").then((result)=>{

      this.resposeData=result;
      console.log(this.resposeData);
      localStorage.setItem('userData',JSON.stringify(this.resposeData))
      this.user=JSON.parse(localStorage.getItem('userData'));
      loadingmessage.dismiss();
      this.navCtrl.push(TimelinePage);



    },(err)=>{

      swal("¡Error!", "Introdujiste mal tu usuario o contraseña", "error");

    });

  }

  goRegister(){
    this.navCtrl.push(RegistroPage);
  }

}
