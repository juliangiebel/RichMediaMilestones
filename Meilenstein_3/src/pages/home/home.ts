import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private dataProvider: DataProvider) {
    
    this.dataProvider.setData("testKey", {name: "Guy"}).catch(msg => console.log(msg))
      .then(() => {
      this.dataProvider.getData("testKey").then(data => {
      console.log(data);
    });
    });
    this.dataProvider.getData("testKey").then(data => {
      console.log(data);
    });
  }

}
