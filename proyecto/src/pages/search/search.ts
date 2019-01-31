import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  personasRoot = 'PersonasPage'
  aventonesRoot = 'AventonesPage'
  value:any;

  constructor(public navCtrl: NavController,public navParams: NavParams) {

    this.value = navParams.get('item');

  }

}
