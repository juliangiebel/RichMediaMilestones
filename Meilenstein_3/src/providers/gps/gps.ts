import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { DataProvider } from '../data/data';
import { Injectable, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

const DATA_KEY = "gps-cache";

interface Position{
  lat: number;
  lng: number;
}

interface PosData{
  data: Position[];
}

@Injectable()
export class GpsProvider implements OnInit {

  watch: Observable<Geoposition>;
  subscription: any;
  
  positionCache: Position[] = [];
  
  //TODO: Load options from memory (use a dedicated config provider for that).
  gpsOptions = {
    active: false,
    timeout: 5000,
    save: false,
    cacheSize: 50
  }
  
  constructor(private geoLocation: Geolocation, private dataProvider: DataProvider) {
    this.ngOnInit()//test
  }

  ngOnInit(){
    console.log("OnInit in gps")
    this.watch = this.geoLocation.watchPosition({timeout: this.gpsOptions.timeout});//this.watch.next();
  }

  activate(){
    console.log("GPS activate");
    if(!this.gpsOptions.active){
      this.subscription = this.watch.subscribe((position) => {
        let coords = position.coords;
        console.log(coords.latitude, coords.longitude);
        this.addPosition({
          lat: coords.latitude,
          lng: coords.longitude
        });
      });
      this.gpsOptions.active = true;
    }else {console.error("GPS was already Activated")}
  }

  deactivate(){
    console.log("GPS deactivate");
    if(this.gpsOptions.active){
    this.subscription.unsubscribe();
    } else {console.error("GPS was already deactivated")}
  }

  restoreChace(){
    if(this.gpsOptions.save){
      this.dataProvider.getData(DATA_KEY,undefined).then((data: PosData) => this.positionCache = data.data).catch(msg => console.error(msg));
    }
  }

  saveChace(){
    if(this.gpsOptions.save){
      this.dataProvider.setData(DATA_KEY, {data: this.positionCache}).catch(msg => console.error(msg));
    }
  }

  addPosition(pos: Position){
    while(this.positionCache.length >= this.gpsOptions.cacheSize){
      this.positionCache.shift();
    }
    this.positionCache.push(pos);
    console.log(this.positionCache);
  }
  
//   getLatestPosition():Position {
//     return this.positionCache.pop();
//   }
  
//   getCache(): Position[]{
//     const let tmp: Position[];
//     for(pos in this.positionCache){
//       tmp.push(pos);
//     }
//     return tmp;
//     }
//   }
  
  
}
