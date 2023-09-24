import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit {

  userDetails = {}
  comeFromChild = {}
  constructor() { }

  ngOnInit() {
  }

  sendData(form){
    this.userDetails = form.value;
  }

  saveData(data){
    this.comeFromChild = data;
  }
}
