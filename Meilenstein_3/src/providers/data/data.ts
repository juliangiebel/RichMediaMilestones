import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import {Observable} from 'rxjs/Observable';
/*
  Generated class for the JsonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  data: any;
  
  constructor(private storage: Storage, private http: Http) {
  }
  
  test(testValue:string){
     console.log(`Test value: ${testValue}`);
    
  }

 getData(key){
    
   return new Promise((resolve, reject) =>{
     
     this.storage.get(key).then(data => {
       console.log(data);
       if(data != null){
        console.log("Loading from storage.");
        resolve(data);
       }else{
        console.log("Loading from json.");
        this.http.get("assets/data/data.json").subscribe(data => {resolve(data.json())});
       }
     }).catch(msg => {
       reject("Error loading data:" + msg);
     })
     
   });
 }
  
 setData(key, data){
   return this.storage.set(key, data)
 }
  
}
