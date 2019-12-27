import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  angular()
  {
this.router.navigate(['studentDashboard/angular'])
  }

  mongodb()
  {
this.router.navigate(['studentDashboard/mongodb'])
  }

  nodejs()
  {
this.router.navigate(['studentDashboard/nodejs'])
  }

  expressjs()
  {
this.router.navigate(['studentDashboard/expressjs'])
  }
}
