import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { CitiesListComponent } from './cities-list/cities-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CityDetailsComponent,
    CitiesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
