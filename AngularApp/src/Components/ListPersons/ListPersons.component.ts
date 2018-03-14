import { Component, OnInit  } from '@angular/core';
import { Http } from '@angular/http';
import { Person } from '../../Models/Person';
import { PersonListService } from '../../Services/PersonList.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ListPersons',
  templateUrl: './ListPersons.component.html',
  styleUrls: ['./ListPersons.component.css']
})

export class ListPersonsComponent implements OnInit {
  
  personArray: Person[];

  constructor(private _httpService: Http, private _personListService: PersonListService, private _router: Router) {

  }

  ngOnInit() {
    console.log("Init - ListPersons");
    this.getPersonsList();
  }

  getPersonsList(): void {
    this._personListService.getPersonsList().subscribe(values => {
      this.personArray = values;
    });
  }
  
}
