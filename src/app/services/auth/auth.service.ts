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
  authChange: EventEmitter<boolean> = new EventEmitter();

  login(id: string, password: string): Observable<any> {
    return this.db.getUserById(id);
  }

  isAuthentiated(): Observable<boolean> {
    let tokenExist = localStorage.getItem('token');
    if (tokenExist) {
      return of(true);
    } else {
      return of(false);
    }
  }

  getAuthEmitter() {
    return this.authChange;
  }
}
