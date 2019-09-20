
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from "../models/user.model"
import { Contact } from '../models/contact.model';
 
const TOKEN_KEY = 'auth-token';
 
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
  authenticationState = new BehaviorSubject(false);
  public user : User;
 
  constructor(private storage: Storage, private plt: Platform,public httpclient:HttpClient) { 
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }
 
  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    })
  }


  async login(user_login:string, user_pass:string): Promise<any>{
    return new Promise<any>((resolve,reject) => {
      this.httpclient.get<any>('http://www.sosante.ifcad.info/web/user/login.php',{
        params: {
          email: user_login,
          pass: user_pass,
        },
      }).subscribe(
      (res) => {
        
        this.user = new User([new Contact (res.contact[0].id,res.contact[0].nom,res.contact[0].numero,res.contact[0].utilisateur), new Contact (res.contact[1].id,res.contact[1].nom,res.contact[1].numero,res.contact[1].utilisateur)],res.prenom,res.nom,res.date_naissance,res.lieu_naissance,res.genre,res.avatar,res.numero,res.poids,res.adresse,res.fiche,res.id);
           
        resolve (this.storage.set(TOKEN_KEY, this.user).then(() => {
          this.authenticationState.next(true);
        }))
  
      },
      (error) => {
          reject(false);
      }
      );
    });
  }

 
  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }
 
  isAuthenticated() {
    return this.authenticationState.value;
  }
 
}