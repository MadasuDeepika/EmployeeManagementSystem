import { EventEmitter, Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private db:FirebaseService) {}
  authChange:EventEmitter<boolean> = new EventEmitter();

  login(id:string,password:string): Observable<any>{
    return this.db.getUserById(id)
  }

  isAuthentiated(): Observable<boolean> {
    let tokenExist = localStorage.getItem('token')
    if(tokenExist){
      this.authChange.emit(true)
      // console.log('User authenticated')
      return of(true);
    }
    else{
      this.authChange.emit(false)
      // console.log('User not authenticated')
      return of(false);
    }
  }

  getAuthEmitter(){
    return this.authChange
  }
}
