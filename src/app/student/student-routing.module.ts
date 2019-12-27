import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ExamComponent } from './exam/exam.component';
import { MarksComponent } from './marks/marks.component';
import { AngularComponent } from './angular/angular.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { ExpressjsComponent } from './expressjs/expressjs.component';
import { NodejsComponent } from './nodejs/nodejs.component';
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


const routes: Routes = [{path:"studentDashboard",component:StudentDashboardComponent,
children:[{path:"exam",component:ExamComponent},{path:"angular",component:AngularComponent,
children:[{path:"easy1",component:Easy1Component},
          {path:"medium1",component:Medium1Component},
          {path:"hard1",component:Hard1Component}]},{path:"mongodb",component:MongodbComponent,
children:[{path:"easy2",component:Easy2Component},
          {path:"medium2",component:Medium2Component},
          {path:"hard2",component:Hard2Component}]},{path:"nodejs",component:NodejsComponent,
children:[{path:"easy3",component:Easy3Component},
          {path:"medium3",component:Medium3Component},
          {path:"hard3",component:Hard3Component}]},{path:"expressjs",component:ExpressjsComponent,
children:[{path:"easy4",component:Easy4Component},
          {path:"medium4",component:Medium4Component},
          {path:"hard4",component:Hard4Component}]},{path:"marks", component:MarksComponent}]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
