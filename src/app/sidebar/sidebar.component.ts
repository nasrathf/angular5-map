import { Component, OnInit } from '@angular/core';
import {AppService} from '../appService';
import {EventType} from '../eventType';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

events: Event [];

  constructor( private appService : AppService ) { }

  ngOnInit() {
    this.appService.getEvents().subscribe(data => {
        this.events = data.EventList;
        console.log(this.events);
  });
  }


}
