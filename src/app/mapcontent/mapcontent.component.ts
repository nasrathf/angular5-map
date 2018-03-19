import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapcontent',
  templateUrl: './mapcontent.component.html',
  styleUrls: ['./mapcontent.component.css']
})
export class MapcontentComponent {
// google maps zoom level
zoom: number = 8;
  
// initial center position for the map
lat: number = 51.673858;
lng: number = 7.815982;

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