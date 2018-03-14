import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private _httpService: Http) {
    
  }
  
  ngOnInit() {
   console.log("Init - Home");
  }
  
}


