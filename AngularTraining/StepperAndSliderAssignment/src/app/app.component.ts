import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutUsComponent } from './about-us/about-us.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog:MatDialog){}
  title = 'Material3';
  openDialog() {
    this.dialog.open(AboutUsComponent, {
      width: '70%',
      height: '75%'
    })
  }
  contactDetails() {
    this.dialog.open(AboutUsComponent, {
      width: '70%',
      height: '75%'
    })
  }
  ceoMessage() {
    this.dialog.open(AboutUsComponent, {
      width: '70%',
      height: '75%'
    })
  }
  
}
