import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { PersonListService } from '../../Services/PersonList.service';
import { PersonForPost } from '../../Models/Person';

@Component({
  selector: 'ToolBar',
  templateUrl: './ToolBar.component.html',
  styleUrls: ['./ToolBar.component.css']
})

export class ToolBarComponent implements OnInit {
  PersonModel = new PersonForPost();
  apiValues: string[] = [];

  constructor(private _httpService: Http, private _personListService: PersonListService) {
    
  }
  
  ngOnInit() {
   
  }

  onSubmit(form: NgForm) {
    
    
  }
}


