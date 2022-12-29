import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { HomeComponent } from './home/home.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { LoginStudentComponent } from './login-student/login-student.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'register',
    component: AddStudentComponent
  },
  {
    path:'login',
    component:LoginStudentComponent
  },
  {
    path:'aboutUs',
    component:AboutUsComponent
  },
  {
    path:'add/course',
    component:AddCourseComponent
  },
  {
    path:'courses',
    component:ListCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
