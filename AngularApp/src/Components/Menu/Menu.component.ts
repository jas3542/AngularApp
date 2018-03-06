import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'


@Component({
  selector: 'Menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  constructor(private _httpService: Http) { }
  apiValues: string[] = [];
  ngOnInit() {
    this._httpService.get('/api/menu').subscribe(values => {
      this.apiValues = values.json() as string[];
    });
  }
}
