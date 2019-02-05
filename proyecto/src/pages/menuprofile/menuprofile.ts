import { EditarProfilePage } from './../editar-profile/editar-profile';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from './../home/home';

/**
 * Generated class for the MenuprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menuprofile',
  templateUrl: 'menuprofile.html',
})
export class MenuprofilePage {   

  rootPage = ProfilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuprofilePage');
  }

  goEdit(){
    this.navCtrl.push(EditarProfilePage);
  }

  
logout(){
 
  
    swal({text: "¿Seguro que deseas cerrar sesión?", buttons: ['Cancel', 'Ok'] })
     .then((solicitar) => {
  if (solicitar) {
    swal("¡Hasta la próxima!", {
      icon: "success",
    });
    this.navCtrl.push(HomePage);
      // localStorage.clear();
      localStorage.removeItem("userData");
    //this.navCtrl.push(HomePage);
  } else {
    swal("Sigue compartiendo con la PandaFamilia");
  }
  });
  }

}
