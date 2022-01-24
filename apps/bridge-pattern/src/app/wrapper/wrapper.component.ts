import { Component, ContentChild, OnInit } from '@angular/core';
import { CHILD_TOKEN,Child } from '../child';

@Component({
  selector: 'dependency-injection-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  constructor() { }
  @ContentChild(CHILD_TOKEN) child:Child|undefined;
  ngOnInit(): void {
  }
  condition:boolean=false;
  toggle()
  {
    console.log(this.child);
    if(this.child)
    {
      this.child.toggleCondition();
      this.condition=this.child.condition;
      console.log("trigger")
    }
  }

}
