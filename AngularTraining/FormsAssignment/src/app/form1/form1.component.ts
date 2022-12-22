import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form1 } from '../model/form1';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  constructor(private formBuilder:FormBuilder) { }
  frm:Form1={
    email:"",
    subscription:"",
    password:""
  };
  formGroup!:FormGroup;
  ngOnInit():void{
    this.formGroup=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      subscription:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  onSubmit()
  {
    if(this.formGroup.valid)
    {
      this.frm=this.formGroup.value;
      console.log(this.frm);
    }
  }
  

}
