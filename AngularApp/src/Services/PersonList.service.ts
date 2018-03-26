import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Person } from '../Models/Person';

import { HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

@Injectable()
export class PersonListService {

  personList: Person[];

  constructor(private _httpService: Http) {

  }

  addPerson(person: Person): Observable<any> {
    var result;

    const requestOptions = {
      params: new HttpParams()
    };
    requestOptions.params.set('Content-Type', 'application/json; charset=utf-8');

    return this._httpService.post('/api/person', person, requestOptions).map(values => {
      values.json();
    });
  }

  getPersonsList(): Observable<Person[]> {
    return this._httpService.get('api/person')
      .map(res => {
        console.log(res.json());
        return res.json().map(item => {
          return item;
        });
      });
  }
}
