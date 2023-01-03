import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'services/student.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private studentService:StudentService,private router:Router,private formBuilder:FormBuilder){}
  studentForm!:FormGroup;
  hide=true;
  namePattern!:"^[a-zA-Z ]{2,20}$";
  ngOnInit():void{
    this.studentForm=this.formBuilder.group({
      name: ['',[Validators.required,Validators.pattern(this.namePattern),Validators.maxLength(32),Validators.minLength(3)]],
      phoneNumber:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email : ['', [Validators.required, Validators.email]],
      userName: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(32),Validators.pattern('^[A-Za-z0-9]+$')]],
      password : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern('^[A-Za-z0-9!@#$%^&*()]+$')]],
      dateOfBirth:['',[Validators.required]],
      gender: ['',[Validators.required]],
      skills: ['',[Validators.required]],
    })
  }
  registerStudent()
  {
    if(this.studentForm.valid)
    {
      this.studentService.registerStudent(this.studentForm.value).subscribe({next:()=>{alert("Student added");
      this.router.navigate(['login']);
      this.studentForm.reset()},
    error:()=>{
      alert("Student not added");
    }});
    }
  }
}
