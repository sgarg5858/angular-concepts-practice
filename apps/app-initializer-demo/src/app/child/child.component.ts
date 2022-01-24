import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dependency-injection-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
