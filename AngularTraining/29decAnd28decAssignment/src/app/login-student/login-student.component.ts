import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent {
  constructor(private formBuilder:FormBuilder,private router:Router,private studentService:StudentService){}
  loginForm!:FormGroup;
  hide=true;
  ngOnInit():void{
    this.loginForm=this.formBuilder.group({
      userName: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(32),Validators.pattern('^[A-Za-z0-9]+$')]],
      password : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern('^[A-Za-z0-9!@#$%^&*()]+$')]]
    })
  }
  loginStudent()
  {
    if(this.loginForm.valid)
    {
      this.studentService.loginStudent(this.loginForm.value).subscribe({next:()=>{
        alert("Login successfull");
        this.router.navigate(['']);  
      },error:()=>{alert("Login Failed")}});
    }
  }
}
