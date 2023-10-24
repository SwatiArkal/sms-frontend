import { Component } from '@angular/core';
import { Student } from '../model/student';
import { CommonService } from '../shared/commonservice.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {


  
  constructor(public cs : CommonService){
    
  }

  stu1 : Student = {
    id: 0,
    firstName: '',
    lastName: '',
    dateOfBirth: '', 
    gender: '',
    email: '',
    phoneNumber: ''
  }
  addStudent(stu : Student){
    console.log("in student reg compo");
  
    if(stu.id==0) {
      this.cs.addStudent(stu).subscribe(
        response => {
          console.log('Student added successfully');
          alert('Student added successfully');
          window.location.reload();
        },
        error => {
          console.log('Error occurred while adding student');
        }
      );
    } else {
      this.cs.updateStudent(stu).subscribe(
        response => {
          console.log('Student updated successfully');
          alert('Student updated successfully');
          window.location.reload();
        },
        error => {
          console.log('Error occurred while updating student');
        }
      );
    }
  }
  

  resetStudent(){
    this.cs.stu = Object.assign({}, this.stu1);
  }
}
