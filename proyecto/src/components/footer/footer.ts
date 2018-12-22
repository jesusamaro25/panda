import { TimelinePage } from './../../pages/timeline/timeline';
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { MyChatsPage} from '../../pages/my-chats/my-chats';
import { ChatPage} from '../../pages/chat/chat';
import { SearchPage } from '../../pages/search/search';
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
    this.navCtlr.setRoot(SearchPage);
  }

}