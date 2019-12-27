import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expressjs',
  templateUrl: './expressjs.component.html',
  styleUrls: ['./expressjs.component.css']
})
export class ExpressjsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  easy4()
  {
    this.router.navigate(['studentDashboard/expressjs/easy4'])
  }

  medium4()
  {
    this.router.navigate(['studentDashboard/expressjs/medium4'])
  }

  hard4()
  {
    this.router.navigate(['studentDashboard/expressjs/hard4'])
  }
}
