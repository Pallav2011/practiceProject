import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {

  @Input() childDeco:string

  constructor() { }
  ngOnInit() {
  }

}