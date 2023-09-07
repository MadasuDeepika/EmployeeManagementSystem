import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';
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

  getUsers(): Observable<any> {
    return this.http.get(this.dbUserUrl);
  }

  updateHoliday(holiday: any, id: any) {
    if(id)
    {
      return this.http.patch(
        `https://lms-project-9b0da-default-rtdb.asia-southeast1.firebasedatabase.app/holidays/${id}.json`,
        holiday
      );
    }
    else {
      return this.http.post(
        `https://lms-project-9b0da-default-rtdb.asia-southeast1.firebasedatabase.app/holidays/.json`,
        holiday
      );
    }
  }

  deleteHoliday(id:any):Observable<any>{
return this.http.delete(`https://lms-project-9b0da-default-rtdb.asia-southeast1.firebasedatabase.app/holidays/${id}.json`,
)
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

  // Leaves module

  getLeaves(): Observable<any> {
    return this.http.get(this.dbLeavesUrl);
  }

  getLeavesById(id: string): Observable<any> {
    return this.http.get(`https://lms-project-9b0da-default-rtdb.asia-southeast1.firebasedatabase.app/leaves/${id}.json`)
  }

  updateSL(id:string,data:number){
    return this.http.patch(`https://lms-project-9b0da-default-rtdb.asia-southeast1.firebasedatabase.app/users/${id}/leaves.json`,{sl:data})
  }

  updateCL(id:string,data:number){
    return this.http.patch(`https://lms-project-9b0da-default-rtdb.asia-southeast1.firebasedatabase.app/users/${id}/leaves.json`,{cl:data})
  }

  requestLeave(leave: any): Observable<any> {
    return this.http.post(  
        `https://lms-project-9b0da-default-rtdb.asia-southeast1.firebasedatabase.app/leaves/${leave.id}.json`
    ,{status:"pending",...leave});
  }

  acceptLeave(key:string,id:string):Observable<any>{
    return this.http.patch(`https://lms-project-9b0da-default-rtdb.asia-southeast1.firebasedatabase.app/leaves/${id}/${key}.json`,{status:'approved'})
  }
  rejectLeave(key:string,id:string):Observable<any>{
    return this.http.patch(`https://lms-project-9b0da-default-rtdb.asia-southeast1.firebasedatabase.app/leaves/${id}/${key}.json`,{status:'rejected'})
  }
}
