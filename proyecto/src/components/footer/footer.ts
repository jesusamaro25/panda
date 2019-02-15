import { TimelinePage } from './../../pages/timeline/timeline';
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { MyChatsPage} from '../../pages/my-chats/my-chats';
import { SearchPage } from '../../pages/search/search';
import { AventonesPage } from '../../pages/aventones/aventones';
/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'footer',
  templateUrl: 'footer.html'
})
export class FooterComponent {

  text: string;

  constructor(public navCtlr: NavController) {
    console.log('Hello FooterComponent Component');
    this.text = 'Hello World';
  }
  mensaje() {
    this.navCtlr.setRoot(MyChatsPage);
  }

  timeline() {
    this.navCtlr.setRoot(TimelinePage);
  }

  search() {
    this.navCtlr.setRoot(SearchPage,{item:""});
  }

  aventones() {
    this.navCtlr.setRoot(AventonesPage);
  }

  alerta() {
    
      swal({text: "¿Deseas activar las notificaciones?", buttons: ['Cancel', 'Ok'] })
        .then((solicitar) => {
          if (solicitar) {
            swal("Las notificaciones han sido activadas", {
              icon: "success",
            });
          } 
      });
     }

}