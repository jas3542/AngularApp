import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Person } from '../../Models/Person';
import { PersonListService } from '../../Services/PersonList.service';

@Component({
  selector: 'Menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  
  personArray: Person[];

  constructor(private _httpService: Http, private _personListService: PersonListService) {

  }

  ngOnInit() {
    this.getPersons().then(function(result) {
      this.personArray = result;
    }.bind(this));
  
  }
  
  getPersons(): Promise<Person> {

    return new Promise(function (resolve, reject) {

      var personArray = this._personListService.getPersonList();
      resolve(personArray);

    }.bind(this));
  }
}
