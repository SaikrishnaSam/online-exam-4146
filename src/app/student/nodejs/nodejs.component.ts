import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nodejs',
  templateUrl: './nodejs.component.html',
  styleUrls: ['./nodejs.component.css']
})
export class NodejsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  
  easy3()
  {
    this.router.navigate(['studentDashboard/nodejs/easy3'])
  }

  medium3()
  {
    this.router.navigate(['studentDashboard/nodejs/medium3'])
  }

  hard3()
  {
    this.router.navigate(['studentDashboard/nodejs/hard3'])
  }
  
}
