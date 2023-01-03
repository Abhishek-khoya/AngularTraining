import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'services/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder, private router: Router, private studentService: StudentService) { }
  loginForm!: FormGroup;
  loginSuccess = false;
  hide = true;
  students: any = [];
  flag = 0;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32), Validators.pattern('^[A-Za-z0-9]+$')]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('^[A-Za-z0-9!@#$%^&*()]+$')]]
    })
  }
  loginStudent() {
    if (this.loginForm.valid) {
      this.loginSuccess = true;
      this.studentService.getAllStudents().subscribe({
        next: (response) => {
          //console.log(response);
          this.students = response;
          this.students.forEach((student: any) => {
            if (this.loginForm.value.userName == student.userName && this.loginForm.value.password == student.password) {
              this.flag = 1;
              alert("Login Successfull");
              this.router.navigate(['']);
            }
          });
          if (this.flag == 0) {
            this.loginSuccess = false;
            alert("Invalid Username or Password");
          }

        }, error: () => { alert("Login Failed") }
      });

    }
  }
}
