import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor() { }
}


import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 
  
  

  constructor(private http : HttpClient) { }

  stu : Student = {
    id: 0,
    firstName: '',
    lastName: '',
    dateOfBirth: '', 
    gender: '',
    email: '',
    phoneNumber: ''
  }

  url : string = 'http://localhost:4040/';
  addStudent(stu : Student) : Observable<Student>{
    console.log("in student common service");

    return this.http.post<Student>(this.url+'students/add', stu);
  }
  


  getStudents() : Observable<Student[]> {
   
    return this.http.get<Student[]>(this.url+'students');
  }

  deleteStudent(id: number) {
    return this.http.delete<Student>(this.url+'students/delete/'+id);
  }

  updateStudent(stu: Student) {
    
    return this.http.put<Student>(this.url+'students/update'+stu.id, stu);
  }
}