import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';
  constructor(public ls:LoginService, private router:Router) { }

  navigateTo()
  {
    let data = localStorage.getItem('admin')
    if(data=="admin")
    {
      this.router.navigate(['adminDashboard']);
    }
    else
    {
      this.router.navigate(['studentDashboard']);
    }
  }

}
