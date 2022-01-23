import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dependency-injection-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  click()
  {
    console.log("clicked");
  }

}
