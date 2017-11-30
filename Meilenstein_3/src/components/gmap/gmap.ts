import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

//const API_KEY = 'AIzaSyBAaL4qkuJ2fICHva1_xGAnVTvCn1HFLO8 ';

declare var google: any;

//Read Doc on Map options and add relevant ones here, make options read only, 
interface MapOptions {
  readonly zoom: number;
  readonly center: {lat: number, lng: number};
}

@Component({
  selector: 'gmap',
  templateUrl: 'gmap.html'
})
export class GmapComponent implements OnInit {

  @ViewChild('map') mapElement: ElementRef;
  
  map: any;
  options: MapOptions;
  constructor() {
    console.log('Hello GmapComponent Component');
  }
  
  ngOnInit(){
    console.log("Ran ngOnInit in gmaps");
    this.options = {
      zoom: 8,
      center: new google.maps.LatLng(43.071584, -89.380120)
    };
    this.initMap();
  }
  
  initMap(){
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.options);
  }
  
}
