import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(private httpClient:HttpClient) { }

  users:any[]=[];

  loadDataFromApi()
  {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/user').pipe(
      tap((users)=>{console.log(users);this.users=users;})
    );
  }
}
