import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Person } from '../../Models/Person';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'Detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  PersonModel = new Person();
  apiValues: string[] = [];

  constructor(private _httpService: Http) {

  }
  
  ngOnInit() {
    
    this._httpService.get('/api/detail').subscribe(values => {
      this.apiValues = values.json() as string[];
    });
  }

  onSubmit(form: NgForm) {
    //console.log(this.PersonModel.Age + " - " + this.PersonModel.Name + " - " + this.PersonModel.Surname);
    this._httpService.post('/api/detail', this.PersonModel).toPromise().then((result) => {
      console.log(result.text());
      form.reset();
    });
    
  }
}
