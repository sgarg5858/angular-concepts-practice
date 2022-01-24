import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dependency-injection-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
