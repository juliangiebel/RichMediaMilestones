import { Component } from '@angular/core';

const API_KEY = 'AIzaSyBAaL4qkuJ2fICHva1_xGAnVTvCn1HFLO8 ';


@Component({
  selector: 'gmap',
  templateUrl: 'gmap.html'
})
export class GmapComponent {

  text: string;

  constructor() {
    console.log('Hello GmapComponent Component');
    this.text = 'Hello World';
  }

}
