import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseApiUrl:string="http://localhost:3000";
  constructor(private http:HttpClient ) { }
  addStudent(addStudentRequest:any):Observable<any>
  {
    return this.http.post<any>(this.baseApiUrl+"/Students",addStudentRequest); 
  }
  loginStudent(loginData:any):Observable<any>
  {
    return this.http.post<any>(this.baseApiUrl+"/Login",loginData);
  }
}
