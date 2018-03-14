import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';

import { ListPersonsComponent } from '../Components/ListPersons/ListPersons.component';
import { AddPersonsComponent } from '../Components/AddPersons/AddPersons.component';
import { ToolBarComponent } from '../Components/ToolBar/ToolBar.component';
import { PersonListService } from '../Services/PersonList.service';
import { HomeComponent } from '../Components/Home/Home.component';

@
NgModule({
  declarations: [
    AppComponent,
    AddPersonsComponent,
    ListPersonsComponent,
    ToolBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },  
      { path: "ListPersons", component: ListPersonsComponent },
      { path: "AddPersons", component: AddPersonsComponent },
      ])
  ],
  providers: [PersonListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
