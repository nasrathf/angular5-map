import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import {AppService} from '../appService';
import {EventType} from '../eventType';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

events: EventType [];
@Output() messageEvent = new EventEmitter<string>();


message: string;

  constructor( private appService : AppService) {
    
     }

  ngOnInit() {
    this.appService.getEvents().subscribe(data => {
        this.events = data.EventList;
        console.log(this.events);
  });
  }

  showEvent(e){
    this.messageEvent.emit(e.Title);
  }


}
