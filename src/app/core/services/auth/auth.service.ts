import { EventEmitter, Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { Observable, of } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private db: FirebaseService, private router: Router) {}

  login(id: string, password: string): Observable<any> {
    return this.db.getUserById(id);
  }

  getUser(){
    let user = localStorage.getItem('token')!;
    return JSON.parse(user).user; 
  }

  isAdmin() {
    let tokenExist = localStorage.getItem('token')!;
    if (JSON.parse(tokenExist).user.role == 'admin') {
      return true
    } else {
      return false
    }
  }

  isAuthenticated(){
    let tokenExist = localStorage.getItem('token')!;
    if (tokenExist) {
      return true;
    } else {
      return false;
    }
  }

}
