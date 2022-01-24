import { Component, OnInit } from '@angular/core';
import { Child, CHILD_TOKEN } from '../child';

@Component({
  selector: 'dependency-injection-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss'],
  providers:[
    {provide:CHILD_TOKEN,useExisting:RightComponent}
  ]
})
export class RightComponent implements OnInit,Child {

  constructor() { }

  condition: boolean=false;
  toggleCondition()
  {
    this.condition=!this.condition;
  }


  ngOnInit(): void {
  }

}
