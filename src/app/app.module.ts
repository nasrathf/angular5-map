import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MapcontentComponent } from './mapcontent/mapcontent.component';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    SidebarComponent,
    MapcontentComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyC7m0g_555Jueat7ag91RNXZXPrsVxmPMc'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
