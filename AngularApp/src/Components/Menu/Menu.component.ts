import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Person } from '../../Models/Person';

@Component({
  selector: 'Menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  apiValues;
  personArray: Person[];

  constructor(private _httpService: Http) {

  }
  
  ngOnInit() {
    this._httpService.get('/api/menu').subscribe(values => {
      //console.log(values.text());
      this.apiValues = values.json() as Person[];
      console.log(this.apiValues);
    });
  }

  ngOnChanges() {
    console.log("Heyyyyy changes");
    this._httpService.get('/api/menu').subscribe(values => {
      //console.log(values.text());
      this.apiValues = values.json() as Person[];
      console.log(this.apiValues);
    });
  }
}
