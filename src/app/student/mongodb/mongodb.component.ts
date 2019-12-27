import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mongodb',
  templateUrl: './mongodb.component.html',
  styleUrls: ['./mongodb.component.css']
})
export class MongodbComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  easy2()
  {
    this.router.navigate(['studentDashboard/mongodb/easy2'])
  }

  medium2()
  {
    this.router.navigate(['studentDashboard/mongodb/medium2'])
  }

  hard2()
  {
    this.router.navigate(['studentDashboard/mongodb/hard2'])
  }
  

}
