import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'dependency-injection-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  viewProviders:[
    {provide:TestService,useValue:{
      scope:"Parent",
      setScope(scope:string)
      {
        this.scope=scope;
      },
      getScope()
      {
        return this.scope;
      }
    }}
  ]
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
