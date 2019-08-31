import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  title = 'KIIT T&P Portal';

  constructor(
    public auth : AuthService,
    private http: HttpClient
  ){ }

  ngOnInit() {
    
  }
}
