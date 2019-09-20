import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public   login_user = {
              user_login: '',
              user_pass: ''
            };
  public message : string;
 
  constructor(private authService: AuthenticationService , private  router:  Router) { 
    this.message = "Connexion"
  }
 
  ngOnInit() {
  }
 
  login(form){
    if(form.value.user_login != '' && form.value.user_pass != ''){
      this.authService.login(form.value.user_login,form.value.user_pass).then(
        (res)=>{

        },
        (rej)=>{
          this.message = "Erreur"
        }
      )
      ;
    }
  }
 
}