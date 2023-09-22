import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']

})
export class Comp1Component implements OnInit {

  constructor() { }

  developerName:string = 'Pandurang';
  imageSource = 'https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg';
  value : string = 'pandurang Ranpise';
  keyUpValue = '';

  ngOnInit() {
  }

  changeImage(){
    this.imageSource = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIkeiwbu6hn5zP31DgzDZ0VnJhRf6jYyC8A&usqp=CAU';
  }

  onKeyUp(val){
    this.keyUpValue = val.target.value;
  }

}
