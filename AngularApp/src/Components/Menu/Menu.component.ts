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
    this.getPersons();
  }
  
  getPersons(): void {
    this._personListService.getPersonList().then(value => {
      this.personArray = value as Person[];
    });
  }
  
}
