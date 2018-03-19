import { Component, OnInit } from '@angular/core';
import {AppService} from '../appService';
import {Restaurants} from '../restaurantsType';

@Component({
  selector: 'app-mapcontent',
  templateUrl: './mapcontent.component.html',
  styleUrls: ['./mapcontent.component.css']
})
export class MapcontentComponent {
// google maps zoom level
zoom: number = 12;

restaurants: Restaurants [];
lat : number;
lng: number;

constructor( private appService : AppService ) {
  this.appService.getRestaurants().subscribe(data => {
    this.restaurants = data.restaurants.restaurant;
    this.lat = parseFloat(this.restaurants[0].latitude);
    this.lng = parseFloat(this.restaurants[0].longitude);
    });
 }

ngOnInit() {
}

  
// initial center position for the map

clickedMarker(label: string, index: number) {
  console.log(`clicked the marker: ${label || index}`)
}

markers: marker[] = [
  {
    lat: 51.673858,
    lng: 7.815982,
    label: 'A',
    draggable: true
  },
  {
    lat: 51.373858,
    lng: 7.215982,
    label: 'B',
    draggable: false
  },
  {
    lat: 51.723858,
    lng: 7.895982,
    label: 'C',
    draggable: true
  }
]
}

// just an interface for type safety.
interface marker {
lat: number;
lng: number;
label?: string;
draggable: boolean;
}