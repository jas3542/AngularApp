import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Person } from '../../../Models/Person';

@Injectable()
export class PersonListService{

  personList: Person[];

  constructor(private _httpService: Http) {

  }

  getPersonList(): Promise<Person[]> {
    
    return new Promise(function (resolve, reject) {

      this._httpService.get('/api/menu').toPromise().then(values => {
        this.personList = values.json() as Person[];
        resolve(this.personList);
      });
      
    }.bind(this));

   
  }

  
}
