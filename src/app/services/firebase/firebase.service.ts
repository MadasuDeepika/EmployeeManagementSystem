import { Injectable } from '@angular/core';
import { User } from '../../models/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private http: HttpClient) {}
  dbUserUrl =
    'https://lms-project-9b0da-default-rtdb.asia-southeast1.firebasedatabase.app/users/.json';
  dbHolidayUrl =
    'https://lms-project-9b0da-default-rtdb.asia-southeast1.firebasedatabase.app/holidays/.json';
  dbLeavesUrl =
    'https://lms-project-9b0da-default-rtdb.asia-southeast1.firebasedatabase.app/leaves/.json';

  requestLeave(leave: any) {
    return this.http.post(this.dbLeavesUrl, leave);
  }


  addUser(user: User): Observable<any> {
    return this.http.put(
      `https://lms-project-9b0da-default-rtdb.asia-southeast1.firebasedatabase.app/users/${user.id}.json`,
      user
    );
  }

  addHoliday(holiday: any, id: any) {
    return this.http.put(
      `https://lms-project-9b0da-default-rtdb.asia-southeast1.firebasedatabase.app/holidays/${id}.json`,
      holiday
    );
  }

  getLeaves(): Observable<any> {
    return this.http.get(this.dbLeavesUrl);
  }

  getUsers(): Observable<any> {
    return this.http.get(this.dbUserUrl);
  }

  updateHoliday(holiday: any, id: any) {
    console.log(holiday, id);

    return this.http.patch(
      `https://lms-project-9b0da-default-rtdb.asia-southeast1.firebasedatabase.app/holidays/${id}.json`,
      holiday
    );
  }

  updateUser(user: any, id: any) {
    return this.http.patch(
      `https://lms-project-9b0da-default-rtdb.asia-southeast1.firebasedatabase.app/users/${id}.json`,
      user
    );
  }

  getUserById(id: string): Observable<any> {
    return this.http.get(
      `https://lms-project-9b0da-default-rtdb.asia-southeast1.firebasedatabase.app/users/${id}.json`
    );
  }

  deleteUserById(id: string) {
    return this.http.patch(
      `https://lms-project-9b0da-default-rtdb.asia-southeast1.firebasedatabase.app/users/${id}.json`,
      { deleted: true }
    );
  }

  getHolidays() {
    return this.http.get(this.dbHolidayUrl);
  }
}
