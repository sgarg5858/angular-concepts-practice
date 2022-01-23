import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DecideBootstrapComponentService {

  constructor(private http:HttpClient) { }

  getDataFromBackend()
  {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
      map(users=>users.length));
  }
}
