import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Person } from '../Models/Person';
import { PersonListService } from '../Services/PersonList.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'AngularApp';

  constructor(private _httpService: Http, private _personListService: PersonListService) {

  }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
  }
  /*
  getPersons(): Promise<Person[]> {
    return new Promise(function(resolve, reject) {
      this._personListService.getPersonsList().toPromise().then(values => {
        resolve(values);
      });
    }.bind(this));
  }
  */
}
