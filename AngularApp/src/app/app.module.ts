import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MenuComponent } from '../Components/Menu/menu.component';
import { DetailComponent } from '../Components/Detail/detail.component';

import { PersonListService } from '../Services/PersonList.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [PersonListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
