import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DetailFormModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-modal',
  templateUrl: 'detail-modal.html',
})
export class DetailModalPage {

  name: string;
  rating: number;
  desc: string;
  lat: number;
  lng: number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  ionViewWillLoad() {
    let tempData = this.navParams.get("data");
    console.log(tempData.rating);
    this.name  = tempData.name;
    this.rating = tempData.rating;
    this.desc  = tempData.desc;
    this.lat   = tempData.lat;
    this.lng   = tempData.lng;
  }

  close(){
    this.view.dismiss();
  }
  
}
