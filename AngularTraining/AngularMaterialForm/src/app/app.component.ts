import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Material2';
  constructor(private formBuilder:FormBuilder){}
  employeeForm!:FormGroup;
  ngOnInit():void{
    this.employeeForm=this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      phoneNumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
    })}
}
