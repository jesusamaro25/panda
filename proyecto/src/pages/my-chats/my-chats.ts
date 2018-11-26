import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage} from '../../pages/chat/chat';

/**
 * Generated class for the MyChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-chats',
  templateUrl: 'my-chats.html',
})
export class MyChatsPage {
mensajes: any[];

ionViewDidLoad() {
  console.log('ionViewDidLoad MyChatsPage');
}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  

  
  //Aqui se guardan los objetos json dentro del arreglo profile Details
  this.mensajes = [
    {
      nombre: "Jesús Amaro",
      profilePic: "assets/imgmychats/amaro.jpg",
      lastMessage: "Saliendo amigo.",
      username: "@Jesusamaro"
    },
    {
      nombre: "Isaac Rodríguez",
      profilePic: "assets/imgmychats/isaac.jpg",
      lastMessage: "vale, para la próxima :(",
      username: "@AnotherIsaac"
    },
    {
      nombre: "Donai Torin",
      profilePic: "assets/imgmychats/donai.jpg",
      lastMessage: "ah ok, ¿me das tu número?.",
      username: "@Donaitorin"
    },
    {
      nombre: "Junior Camacho",
      profilePic: "assets/imgmychats/junior.jpg",
      lastMessage: "Ya no me iré contigo, gracias",
      username: "@Darons"
    },
    {
      nombre: "Yessika Arriche",
      profilePic: "assets/imgmychats/yessika.jpg",
      lastMessage: "Hola, ¿En donde te espero?",
      username: "@YessikaArrieche"
    },
    {
      nombre: "Nervy Gomez",
      profilePic: "assets/imgmychats/nervy.jpg",
      lastMessage: "Te estamos esperando",
      username: "@NervyG"
    },
    {
      nombre: "Argenis gomez",
      profilePic: "assets/imgmychats/argenis.jpg",
      lastMessage:"¿Llegaste bien a casa?",
      username: "@ArgenisGomez"
    }
  ];
  }
  /**
   * Navigate to the detail page for this item.
   
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
  */
 especificacion() {
  this.navCtrl.push(ChatPage);
}
}
