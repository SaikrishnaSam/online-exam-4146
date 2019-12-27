import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ExamComponent } from './exam/exam.component';
import { MarksComponent } from './marks/marks.component';
import { AngularComponent } from './angular/angular.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { ExpressjsComponent } from './expressjs/expressjs.component';
import { Easy1Component } from './angular/easy1/easy1.component';
import { Medium1Component } from './angular/medium1/medium1.component';
import { Hard1Component } from './angular/hard1/hard1.component';
import { Easy2Component } from './mongodb/easy2/easy2.component';
import { Medium2Component } from './mongodb/medium2/medium2.component';
import { Hard2Component } from './mongodb/hard2/hard2.component';
import { Easy3Component } from './nodejs/easy3/easy3.component';
import { Medium3Component } from './nodejs/medium3/medium3.component';
import { Hard3Component } from './nodejs/hard3/hard3.component';
import { Easy4Component } from './expressjs/easy4/easy4.component';
import { Medium4Component } from './expressjs/medium4/medium4.component';
import { Hard4Component } from './expressjs/hard4/hard4.component';


@NgModule({
  declarations: [StudentDashboardComponent,
                 ExamComponent, 
                 MarksComponent, 
                 AngularComponent, 
                 MongodbComponent,
                 NodejsComponent, 
                 ExpressjsComponent, Easy1Component, Medium1Component, Hard1Component, Easy2Component, Medium2Component, Hard2Component, Easy3Component, Medium3Component, Hard3Component, Easy4Component, Medium4Component, Hard4Component],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
