import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'


@Component({
  selector: 'Menu',
  templateUrl: './nameList.component.html',
  styleUrls: ['./nameList.component.css']
})

export class NameListComponent implements OnInit {
  constructor(private _httpService: Http) { }
  apiValues: string[] = [];
  ngOnInit() {
    this._httpService.get('/api/values').subscribe(values => {
      this.apiValues = values.json() as string[];
    });
  }
}
