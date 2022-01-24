import { Component, OnInit } from '@angular/core';
import { Child, CHILD_TOKEN } from '../child';

@Component({
  selector: 'dependency-injection-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss'],
  providers:[
    {provide:CHILD_TOKEN,useExisting:LeftComponent}
  ]
})
export class LeftComponent implements OnInit,Child {

  constructor() { }

  condition: boolean=false;
  toggleCondition()
  {
    this.condition=!this.condition;
  }

  ngOnInit(): void {
  }

}
