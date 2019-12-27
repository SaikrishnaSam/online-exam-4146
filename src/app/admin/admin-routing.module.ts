import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BatchComponent } from './batch/batch.component';
import { QuestionPaperComponent } from './question-paper/question-paper.component';
import { AddStudentComponent } from './add-student/add-student.component';


const routes: Routes = [
  {path:"adminDashboard",component:AdminDashboardComponent,
  children:[
  {path:"batch",component:BatchComponent},
  {path:"questionPaper",component:QuestionPaperComponent},
  { path:"addStudent",component:AddStudentComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
