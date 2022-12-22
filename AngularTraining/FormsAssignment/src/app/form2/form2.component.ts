import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form2 } from '../model/form2';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
  constructor(private formBuilder:FormBuilder) { }
  frm:Form2={
    projectName : "",
    email:"",
    projectStatus:""
  };
  formGroup!:FormGroup;
  test!:"test"
  ngOnInit():void{
    this.formGroup=this.formBuilder.group({
      projectName:['',[Validators.required,Validators.pattern(this.test)]],
      email:['',[Validators.required,Validators.email]],
      projectStatus:['',[Validators.required]] 
    })
  }
  onSubmit()
  {
    if(this.formGroup.valid)
    {
      this.frm=this.formGroup.value;
      if(this.frm.projectName=='Test' || this.frm.projectName=='test')
      {
        window.alert("You cannot take test as a project name");
      }
      else
      {
        console.log(this.frm);
      }
    }
  }
}
