import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import {AppService} from '../../service/appService';
import {EventType} from '../eventType';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

//Holds the list of events
events: EventType [];
@Output() messageEvent = new EventEmitter<EventType>();

  constructor( private appService : AppService) { }

  ngOnInit() {
    this.appService.getEvents().subscribe(data => {
        this.events = data.EventList;
  });
  }

  showEvent(e){
    //Emits the clicked event details
    this.messageEvent.emit(e);
  }

}
