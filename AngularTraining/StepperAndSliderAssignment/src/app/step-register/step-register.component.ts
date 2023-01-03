import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatProgressBarDefaultOptions, MatProgressBarLocation, ProgressBarMode } from '@angular/material/progress-bar';
import { StudentService } from 'services/student.service';

@Component({
  selector: 'app-step-register',
  templateUrl: './step-register.component.html',
  styleUrls: ['./step-register.component.css']
})
export class StepRegisterComponent {
  constructor(private formBuilder:FormBuilder,private studentService:StudentService){}
  addStudentRequest:any=
  {
    name: "",
    fatherName: "",
    motherName: "",
    phoneNumber:"",
    email : "",
    dateOfBirth:"",
    gender: "",
    fullName: "",
    bankName:"",
    accNo:"",
    ifscCode:"",
    mobileBanking: "",
    netBanking: "",
    presentAddress:"",
    permanentAddress: ""
  }
  wordCount: any;

  @ViewChild("text") text: ElementRef | undefined;
  words: any;
  wordCounter() {
    //alert(this.text.nativeElement.value)
    this.wordCount = this.text ? this.text.nativeElement.value.split(/\s+/) : 0;
    this.words = this.wordCount ? this.wordCount.length : 0;
  }
  firstFormGroup = this.formBuilder.group({
    name: ['',[Validators.required,Validators.pattern("^[a-zA-Z ]{2,20}$"),Validators.maxLength(32),Validators.minLength(3)]],
    fatherName: ['',[Validators.required,Validators.pattern("^[a-zA-Z ]{2,20}$"),Validators.maxLength(32),Validators.minLength(3)]],
    motherName: ['',[Validators.required,Validators.pattern("^[a-zA-Z ]{2,20}$"),Validators.maxLength(32),Validators.minLength(3)]],
    phoneNumber:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    email : ['', [Validators.required, Validators.email]],
    dateOfBirth:['',[Validators.required]],
    gender: ['',[Validators.required]],
  });
  secondFormGroup = this.formBuilder.group({
    fullName: ['',[Validators.required,Validators.pattern("^[a-zA-Z ]{2,20}$"),Validators.maxLength(32),Validators.minLength(3)]],
    bankName:['',[Validators.required]],
    accNo:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
    ifscCode:['',[Validators.required]],
    mobileBanking: ['',[Validators.required]],
    netBanking: ['',[Validators.required]]
  });
  thirdFormGroup = this.formBuilder.group({
    presentAddress:['',[Validators.required,Validators.maxLength(60),Validators.minLength(10)]],
    permanentAddress: ['',[Validators.required,Validators.maxLength(60),Validators.minLength(10)]]
  });
  isLinear = false;
  registerStudent()
  {
    //this.progressBar.mode='indeterminate';
    if(this.firstFormGroup.valid)
    {
      if(this.thirdFormGroup.valid)
      {
        this.addStudentRequest.name=this.firstFormGroup.value.name;
        this.addStudentRequest.fatherName=this.firstFormGroup.value.fatherName;
        this.addStudentRequest.motherName=this.firstFormGroup.value.motherName;
        this.addStudentRequest.phoneNumber=this.firstFormGroup.value.phoneNumber;
        this.addStudentRequest.email=this.firstFormGroup.value.email;
        this.addStudentRequest.dateOfBirth=this.firstFormGroup.value.dateOfBirth;
        this.addStudentRequest.gender=this.firstFormGroup.value.gender;
        this.addStudentRequest.fullName=this.secondFormGroup.value.fullName;
        this.addStudentRequest.bankName=this.secondFormGroup.value.bankName;
        this.addStudentRequest.accNo=this.secondFormGroup.value.accNo;
        this.addStudentRequest.ifscCode=this.secondFormGroup.value.ifscCode;
        this.addStudentRequest.mobileBanking=this.secondFormGroup.value.mobileBanking;
        this.addStudentRequest.netBanking=this.secondFormGroup.value.netBanking;
        this.addStudentRequest.presentAddress=this.thirdFormGroup.value.presentAddress;
        this.addStudentRequest.permanentAddress=this.thirdFormGroup.value.permanentAddress;
        this.studentService.addStudent(this.addStudentRequest).subscribe({next:()=>{alert("Student Added")},error:()=>{alert("Student not Added")}});
      }
    }
  }
}

