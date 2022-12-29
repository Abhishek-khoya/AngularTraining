import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AboutUsComponent } from './about-us/about-us.component';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';
export interface Hobbies {
  name: string;
}
export interface ColorHobbies {
  name: string;
  color : ThemePalette
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Material2';
  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) { }
  employeeForm!: FormGroup;

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    })
  }
  openDialog() {
    this.dialog.open(AboutUsComponent, {
      width: '75%',
      height: '75%'
    })
  }
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  hobbies: Hobbies[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.hobbies.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(hobby: Hobbies): void {
    const index = this.hobbies.indexOf(hobby);

    if (index >= 0) {
      this.hobbies.splice(index, 1);
    }
  }

  edit(hobby: Hobbies, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(hobby);
      return;
    }

    // Edit existing fruit
    const index = this.hobbies.indexOf(hobby);
    if (index > 0) {
      this.hobbies[index].name = value;
    }
  }
  colorHobbies:ColorHobbies[]=
  [
    {name:'Drawing',color:undefined},
    {name:'Cooking',color:'primary'},
    {name:'Singing',color:'warn'},
    {name:'Dancing',color:'accent'},
  ];
}
