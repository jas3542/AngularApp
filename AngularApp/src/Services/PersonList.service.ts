import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Person } from '../Models/Person';

import { HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonListService {

  personList: Person[];

  constructor(private _httpService: Http) {

  }

  getPersonList(): Promise<Person[]> {

    return new Promise(function (resolve, reject) {
      this._httpService.get('/api/person').toPromise().then(values => {
        this.personList = values.json() as Person[];
        resolve(this.personList);
      });
    }.bind(this));
  }

  addPerson(person: Person): boolean {
    const requestOptions = {
      params: new HttpParams()
    };
    requestOptions.params.set('Content-Type', 'application/json; charset=utf-8');
    this._httpService.post('/api/person', person, requestOptions).subscribe(values => {
    });
    return true;
  }

  getPerson(): Observable<any> {
    return this._httpService.get('api/person');
  }

}
