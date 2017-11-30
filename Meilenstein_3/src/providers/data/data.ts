import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import {Observable} from 'rxjs/Observable';
/*
  Generated class for the JsonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
interface Data {
    data: any[]
  }

@Injectable()
export class DataProvider {

  data: Data;
  
  constructor(private storage: Storage, private http: Http) {
  }
  
  test(testValue:string){
     console.log(`Test value: ${testValue}`);
    
  }

 getData(key, defaultJson){
    
   return new Promise((resolve, reject) =>{
     
     this.storage.get(key).then(data => {
       console.log("provider:\n"+data);
       if(data != null){
        console.log("Loading from storage.");
        resolve(data);
       }else if(defaultJson != undefined){
        console.log("Loading from json.");
        this.http.get(defaultJson).subscribe(data => {resolve(data.json())});
       }else {
         reject("No entry found and no default file passed to getData.")
       }
     }).catch(msg => {
       reject("Error loading data:" + msg);
     })
     
   });
 }
  
 setData(key, lData){
   return this.storage.set(key, {data: lData});
 }
  
}
