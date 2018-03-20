import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import {EventType} from './eventType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  message:EventType;
  ngAfterViewInit() {
  }
  title = 'app';

  receiveMessage($event) {
    this.message = $event;
  }
}
