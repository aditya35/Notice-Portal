import { Component, OnInit,NgModule, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import {Subscription} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit ,OnDestroy {

  hide = true;
  login:Subscription;
  constructor(
    public  auth : AuthService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.login.unsubscribe();
  }

  onSubmit(form:NgForm){
    this.login = this.auth.login(form.value.username,form.value.password).subscribe(
      Response => {
        console.log(Response)
        this.router.navigate(['home'])
      },
      Error => {
        console.log(Error)
        console.log(Error.message)
      }
    )
  }
  logOut(){
    this.auth.logout().subscribe(
      Response => {
       console.log(Response)
       this.router.navigate(['login'])
      },
      Error =>{
        console.log(Error)
      }
      )
  }

}
