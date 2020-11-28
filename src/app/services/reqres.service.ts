import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://reqres.in/api/users?page=1').pipe(map(data => {
      return data;
    }));
  }

  addUser(data){
    return this.http.post<any>('https://reqres.in/api/users', data);
  }

}
