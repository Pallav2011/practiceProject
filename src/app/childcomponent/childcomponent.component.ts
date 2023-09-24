import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {

  childData = {};
  @Input() childDeco:string;
  @Output() childToParent: EventEmitter <any> = new EventEmitter<any> ();
  
  constructor() { }
  
  ngOnInit() {
  }

  sendData(data){
    this.childData = data.value;
    this.childToParent.emit(this.childData);
  }
}
