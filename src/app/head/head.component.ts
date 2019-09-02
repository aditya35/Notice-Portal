import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  title = 'KIIT T&P Portal';

  constructor(
    public auth : AuthService,
    private http: HttpClient,
    private router : Router
  ){ }

  ngOnInit() {}

  logOut(){
    this.auth.logout().subscribe(
      Response => {
       console.log(Response)
       this.router.navigate(['login'])
      },
      Error =>{
        if(Error.status == 200){
          this.router.navigate(['login'])  
          this.auth.auth=false;
        }        
      }
      )
  }
}
