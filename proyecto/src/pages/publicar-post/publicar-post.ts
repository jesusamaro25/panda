import { TimelinePage } from './../timeline/timeline';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';

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

  public user: any;
  postData={"text":"","number":"","user_id":""}
  user_id={"user_id":""}
  resposeData: any;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
          public alertCtrl: AlertController,
          public authService: AuthServiceProvider) {

            const data= JSON.parse(localStorage.getItem('userData'));
            this.user=data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicarPostPage');
  }

  guardarPost(){

    this.authService.postData(this.postData,"posts").then((result)=>{

      this.resposeData=result;
      console.log(this.resposeData);
      localStorage.setItem('userData',JSON.stringify(this.resposeData))
      swal("¡Listo!", "Bienvenido a la familia Panda", "success");
      this.navCtrl.setRoot(TimelinePage);

    },(err)=>{


    });

  }

  seleccionarBacantes(){
   let prompt = this.alertCtrl.create({
    title: 'Vacantes',
    message: '¿Cuantas personas te pueden acompañar?',
    inputs : [
     {
       type:'radio',
       label:'1',
       value:'1'
     },
     {
       type:'radio',
       label:'2',
       value:'2'
      },
      {
       type:'radio',
       label:'3',
       value:'3'
     },
     {
       type:'radio',
       label:'4',
       value:'4'
     }

    ],
    buttons : [
     {
       text: "Cancel",
       handler: (data:string) => {
         console.log("cancel clicked");
       }
     },
     {
       text: "Publicar",
       handler: data => {

        if (data !== undefined){

          this.postData.number=data;
          this.postData.user_id=this.user._id.$oid;

          this.guardarPost();

          console.log(data);
          swal("Listo","¡Gracias por tu disposición!","success");

        }else{

          swal("Error","Selecciona la cantidad de puestos libres","error");

        }


       }
     }
    ]
    });
    prompt.present();
}

}
