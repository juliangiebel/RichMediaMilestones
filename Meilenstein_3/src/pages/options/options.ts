import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GpsProvider } from '../../providers/gps/gps'; 
/**
 * Generated class for the OptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {
  
  gpsActive: boolean;
  gpsTimeout: number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private gps: GpsProvider) {
  }

  ionViewWillLoad() {
    this.gpsActive = this.gps.gpsOptions.active;
    this.gpsTimeout = this.gps.gpsOptions.timeout;
  }
  
  saveOptions(){
    console.log(this.gpsActive,this.gpsTimeout);
    if(this.gpsActive){
      this.gps.activate();
    } else {
      this.gps.deactivate();
    }
    this.gps.gpsOptions.timeout = this.gpsTimeout;
  }

}
