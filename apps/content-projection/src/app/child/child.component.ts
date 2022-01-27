import { Component, OnInit } from '@angular/core';

let instances=0;

@Component({
  selector: 'dependency-injection-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  count:number=0;
  constructor() { 
    this.count= ++instances;
  }

  ngOnInit(): void {
  }

}
