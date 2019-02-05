import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuUserPage } from '../menu-user/menu-user';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';

/**
 * Generated class for the PersonasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personas',
  templateUrl: 'personas.html',
})
export class PersonasPage {

  mensajes: any[];
  public user: any;
  personDetails: any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider) {

    const data= JSON.parse(localStorage.getItem('userData'));
    this.user=data;

    this.authService.getDataByOneParam("searchalluser","username",this.user.username).then((data) =>{

      this.personDetails=data;
      console.log(this.personDetails);

    })

  }

  visitarPerfil(id){
    console.log('el id de este pana es.........'+id);
    this.navCtrl.push(MenuUserPage,{item:id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonasPage');
  }

}
