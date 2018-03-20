import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  message:string;
  ngAfterViewInit() {
  }
  title = 'app';

  receiveMessage($event) {
    this.message = $event;
    console.log('received ' +this.message );
  }
}
