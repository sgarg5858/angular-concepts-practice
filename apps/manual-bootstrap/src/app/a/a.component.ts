import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dependency-injection-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
