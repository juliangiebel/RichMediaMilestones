import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

const DATA_KEY = "app-data"

interface Data {
    data: any[]
  }
//*ngFor="let item of items; let i = index"

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  data: any[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, private dataProvider: DataProvider) {
    
  }
  
  ionViewWillLoad(){
    
    this.dataProvider.getData(DATA_KEY,"assets/data/data.json").then((data:Data) => {this.data = data.data; console.log(this.data)}).catch(msg => console.log(msg));
    
  }
  
  ionViewDidLoad(){
    console.log("View Loaded")
    
    //this.openModal('DataFormModalPage');
  }
  
  saveData(){
    this.dataProvider.setData(DATA_KEY, this.data);
  }
  
  remove(id: number){
    this.data.splice(id,1);
    this.saveData();
  }
  
  showDetails(id: number){
    this.openModal('DetailModalPage', this.data[id],()=>{});
  }
  
  openModal(page: string, lData: any, call: (data: any) => any) {
    const modalInstance = this.modal.create(page,  {data: lData});
    modalInstance.present();
    modalInstance.onDidDismiss(call); 
      
  }
}
