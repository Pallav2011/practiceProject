import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.css']
})
export class DecoratorsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  gotoParent(){
    this.route.navigate(['parent']);
  }

}
