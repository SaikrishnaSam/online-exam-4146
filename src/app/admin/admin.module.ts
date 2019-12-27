import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { QuestionPaperComponent } from './question-paper/question-paper.component';
import { BatchComponent } from './batch/batch.component';
import { FormsModule } from '@angular/forms';
import { AddStudentComponent } from './add-student/add-student.component';

@NgModule({
  declarations: [ AdminDashboardComponent,BatchComponent,QuestionPaperComponent, AddStudentComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
