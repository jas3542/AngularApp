import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonListService } from '../../Services/PersonList.service';
import { PersonForPost } from '../../Models/Person';

@Component({
  selector: 'AddPersons',
  templateUrl: './AddPersons.component.html',
  styleUrls: ['./AddPersons.component.css']
})

export class AddPersonsComponent implements OnInit {
  PersonModel = new PersonForPost();
  apiValues: string[] = [];

  constructor(private _httpService: Http, private _personListService: PersonListService, private _router: Router) {
    
  }
  
  ngOnInit() {
    console.log("Init - AddPersons");
  }

  onSubmit(form: NgForm) {
    this._personListService.addPerson(this.PersonModel).subscribe(values => {
      this._router.navigate(['/ListPersons']);
    });
    
    console.log("Added User: " + this.PersonModel.name);
    
  }
}


