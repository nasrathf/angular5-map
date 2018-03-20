import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MapcontentComponent } from './mapcontent/mapcontent.component';
import { AgmCoreModule } from '@agm/core';

import {AppService} from './appService';
import {MessageService} from './message.service';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    SidebarComponent,
    MapcontentComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,ToastModule.forRoot(),Ng2SearchPipeModule,FormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyC7m0g_555Jueat7ag91RNXZXPrsVxmPMc'
    })

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
