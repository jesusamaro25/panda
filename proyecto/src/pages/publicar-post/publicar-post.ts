import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the PublicarPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publicar-post',
  templateUrl: 'publicar-post.html',
})
export class PublicarPostPage {

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicarPostPage');
  }

  seleccionarBacantes(){
   let prompt = this.alertCtrl.create({
    title: 'Vacantes',
    message: '¿Cuantas personas te pueden acompañar?',
    inputs : [
     {
       type:'radio',
       label:'1'
     },
     {
       type:'radio',
       label:'2'
      },
      {
       type:'radio',
       label:'3'
     },
     {
       type:'radio',
       label:'4'
     }

    ],
    buttons : [
     {
       text: "Cancel",
       handler: data => {
         console.log("cancel clicked");
       }
     },
     {
       text: "Publicar",
       handler: data => {
         swal("Listo","¡Gracias por tu disposición!","success");
       }
     }
    ]
    });
    prompt.present();
}

}
