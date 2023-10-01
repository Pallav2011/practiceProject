import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  display:boolean = false;
  hide:boolean = false;

  myDetails = {
    profilePic : './assets/myPic.jpg',
    name : 'Pallav Ranpise',
    address : 'Pandharpur',
    contactNo : 9145437409,
  }

  userList = [
    {
      userId:1,
      userName:'user1'
    },
    {
      userId:2,
      userName:'user2'
    }
  ]

  arrayOfFriends = ['Pallav','onkar','rahul','swapnil','nitin','samadhan','mayur','komal'];

  multipleOptions = ['Easy','Medium','Hard','Very Hard'];
  selectedValue:string;

  constructor() { }

  ngOnInit() {
  }

  displayData(){
    this.display = true;
    this.hide = false;
  }

  hideData(){
    this.hide = true;
    this.display = false;
  }

  selectedOption(val) {
    this.selectedValue = val.target.value;
  }
}
