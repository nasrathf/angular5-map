import { Component, OnInit, Input,ViewContainerRef  } from '@angular/core';
import {AppService} from '../../service/appService';
import {Restaurants} from '../restaurantsType';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {EventType} from '../eventType';


@Component({
  selector: 'app-mapcontent',
  templateUrl: './mapcontent.component.html',
  styleUrls: ['./mapcontent.component.css']
})
export class MapcontentComponent {
// google maps zoom level
zoom: number = 11;
renderHtml:string;
restaurants: Restaurants [];
lat : number;
lng: number;
dataLabel: string;

@Input() eventDetails: EventType;

ngOnChanges(changes) {
  this.childFunction(changes);
}

childFunction(changes){
  if(this.eventDetails !== undefined){
  this.toastr.info('<h6 style="font-weight:700">'+ this.eventDetails.Title +' ,</h6> <span>'+this.eventDetails.Location+', '+this.eventDetails.Venue+'</span>'+'<br><span style="font-size:12px">'+this.eventDetails.EventDate+'</span>', null, {enableHTML: true});
  }
}
constructor( private appService : AppService, public toastr: ToastsManager, vcr: ViewContainerRef ) {
  this.toastr.setRootViewContainerRef(vcr);
  this.appService.getRestaurants().subscribe(data => {
    this.restaurants = data.restaurants.restaurant;
    this.lat = parseFloat(this.restaurants[0].latitude);
    this.lng = parseFloat(this.restaurants[0].longitude);
    //converting latitude and longitude from string to number
    this.restaurants.forEach(function(element){
      element.lat =  parseFloat(element.latitude);
      element.lng =  parseFloat(element.longitude);
    });
    });
 }

clickedMarker(label: string) {
  this.dataLabel = label;
}
}
