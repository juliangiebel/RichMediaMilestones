import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the DataFormModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-form-modal',
  templateUrl: 'data-form-modal.html',
})
export class DataFormModalPage {

  rForm: FormGroup;
  entry: any;
    desc: string;
    name: string;
    rating: number;
    lat: number;
    lng: number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
               private view: ViewController, private formBuilder: FormBuilder,
               /*private toastCtrl: ToastController*/) {
  }
  
  ionViewWillLoad() {
    this.rForm = this.formBuilder.group({
      'name'        : [null,Validators.required],
      'description' : [null,Validators.maxLength(500)],
      'rating'      : [null,Validators.compose([Validators.min(0),Validators.max(5)])],
      'lat'         : [10.00000,Validators.required],
      'lng'         : [10.00000,Validators.required]
    });
  }
  
  submit(entry){
    console.log("Submiting entry");
    this.name = entry.name;
    this.desc = entry.name;
    this.rating = entry.rating;
    this.lat = entry.lat;
    this.lng = entry.lng;
    this.notify(`Eintrag: ${entry.name} erfolgreich hinzugefügt.`,3000)
    this.close({
      desc: this.desc,
      name: this.name,
      rating: this.rating,
      lat: this.lat,
      lng: this.lng });
  }
  
  close(lData: any)
  {
    if(lData === null || lData == undefined)
    { this.view.dismiss();}
    else{ this.view.dismiss(lData); }
  }
  
  notify(msg, duration) {
//     let toast = this.toastCtrl.create({
//       message: msg,
//       duration: duration
//     });
//     toast.present();
  }

}
