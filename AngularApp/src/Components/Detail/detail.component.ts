import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
//import { Person } from '../../Models/Person';
import { NgForm } from '@angular/forms';
import { PersonListService } from '../../Services/PersonList.service';
import { PersonForPost } from '../../Models/Person';

@Component({
  selector: 'Detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  PersonModel = new PersonForPost();
  apiValues: string[] = [];

  constructor(private _httpService: Http, private _personListService: PersonListService) {
    
  }
  
  ngOnInit() {
   
  }

  onSubmit(form: NgForm) {

    var result = this._personListService.addPerson(this.PersonModel);
    if (result) {
      console.log("Added User: " + this.PersonModel.name);
    }

  }
}


