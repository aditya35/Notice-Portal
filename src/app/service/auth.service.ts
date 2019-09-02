import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth: boolean = false;
  public user : User;
  constructor( private http: HttpClient){ 
    this.user = new User();
  }

  checkAuth(): boolean {
    return this.auth;
  }

  basicAuthentication(username: string, password: string) {
    let basicAuthString = "Basic " + window.btoa(username + ":" + password);
    let headers = new HttpHeaders({
      'Authorization': basicAuthString,
      geo_loc_sec: 'undefined'
    })
  let options = { headers:headers}

  return this.http.post(TNP_LOGIN,null,options).pipe(
    map(
      data => {
        this.auth=true;
        this.user = <User> data;
        return data
      }
    )
  );
  }

  login(username: string, password: string) {
    return this.basicAuthentication(username, password)
  }
  logout(){
    let headers = new HttpHeaders({
      'userId' : this.user.rollNo
    })
    let options = { headers: headers}
    return this.http.get(TNP_LOGOUT,options).pipe(
      map(
        data => {
          this.auth=false;
          // console.log(data.status);
          return data;
        }
      )
    )
  }
}
export const TNP_LOGIN = 'https://apiv3.kiittnp.in/api/1.1/connect/login'
export const TNP_LOGOUT = 'https://apiv3.kiittnp.in/api/1.5/connect/logout'
