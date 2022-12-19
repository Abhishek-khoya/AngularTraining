import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string="";
  buttonState:boolean=false;
  title = 'WebApplicationTwo';
  resetForm()
  {
    this.name="";
  }

  fullName:string ="Your Name = Abhishek Khoya";
  text:boolean=false;
  count:number = 0;
  clickCount:number[] =[];

  displayParagraph()
  {
    this.clickCount.push(++this.count);
    this.text = !this.text;
  }
  BackgroundColor(i:number)
  {
    if(i>=5)
    {
      return "blue";
    }
    else
    {
      return "white";
    }
  }
}
