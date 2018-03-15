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

  filteredPerson: Person[];
  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredPerson = this.listFilter ? this.performFilter(this.listFilter) : this.personArray;
  }

  constructor(private _httpService: Http, private _personListService: PersonListService, private _router: Router) {

  }

  ngOnInit() {
    console.log("Init - ListPersons");
    //this._listFilter = 'cart';

    this.getPersonsList();
    this.getFilteredPersonsList();
    
  }

  getPersonsList(): void {
    this._personListService.getPersonsList().subscribe(values => {
      this.personArray = values;
    });
  }

  getFilteredPersonsList(): void {
    this._personListService.getPersonsList().subscribe(values => {
      this.filteredPerson = values;
    });
  }

  performFilter(filterBy: string): Person[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.personArray.filter((person) => 
      person.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  
}
