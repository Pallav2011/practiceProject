import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name:string = 'Pallav Ranpise';
  mobileNo:number = 9145437409;

  parentValue = 'I am come from parent'; 

}
