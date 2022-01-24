import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  private scope:string="root";
  setScope(scope:string)
  {
    this.scope=scope;
  }
  getScope()
  {
    return this.scope;
  }
}
