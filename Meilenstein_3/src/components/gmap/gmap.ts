import { Component } from '@angular/core';

/**
 * Generated class for the GmapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
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
