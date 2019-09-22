import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authservice.Login(this.model).subscribe(next => {
      console.log('Login Exitoso');
    }, error => {
      console.log('Error al hacer login');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logOut() {
    localStorage.removeItem('token');
    console.log('logged out');
  }
}
