import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {AppRoutingModule, routingComponents} from "./appRouting.module";
import {DataService} from "./add-user/data.service";

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, routingComponents],
  providers: [DataService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
