import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

//import { Person } from '../../Models/Person';
import { NgForm } from '@angular/forms';

import { HttpParams } from "@angular/common/http";

@Component({
  selector: 'Detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  PersonModel = new PersonForPost();

  apiValues: string[] = [];

  constructor(private _httpService: Http) {
    
  }
  
  ngOnInit() {
   
  }

  onSubmit(form: NgForm) {
    //console.log(JSON.stringify(this.PersonModel));

    const requestOptions = {
      params: new HttpParams()
    };
    requestOptions.params.set('Content-Type', 'application/json; charset=utf-8');
    
    this._httpService.post('/api/detail', this.PersonModel, requestOptions ).subscribe(values => {
      //console.log("result receiving-> "+values.text());
    });
    
  }
}

export class PersonForPost {
  public name: string;
  public surname: string;
  public age: number;
  
}

