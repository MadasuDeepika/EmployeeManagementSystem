import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { User } from '../models/user.model'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http:HttpClient) { }
  addUser(user: User){
    
    this.http.put('https://lms-project-9b0da-default-rtdb.asia-southeast1.firebasedatabase.app/users/1001.json', user).subscribe(data=>console.log(data))
    }
  
}
