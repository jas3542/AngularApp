import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'


@Component({
  selector: 'Detail',
  templateUrl: './jas.component.html',
  styleUrls: ['./jas.component.css']
})

export class JasComponent implements OnInit {
  constructor(private _httpService: Http) { }
  apiValues: string[] = [];
  ngOnInit() {
    this._httpService.get('/api/jas').subscribe(values => {
      this.apiValues = values.json() as string[];
    });
  }
}
