import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ls:LoginService,private router:Router) { }

  ngOnInit() {
   setTimeout(() => {
     this.ls.logout();
   }, 0);
  }
 
  loginTo(data)
  {
    console.log(data);
    
    this.ls.login(data).subscribe((res)=>{
      if(res['message']=="admin logged in successfully")
      {
        localStorage.setItem('token',res['token']);
        localStorage.setItem('admin',data.loginAs)
      
        this.router.navigate(['adminDashboard']);
      }
      else if((res['message']=="student logged in successfully"))
      {
        localStorage.setItem('token',res['token']);
        localStorage.setItem('studentId',res['studentId'])
        localStorage.setItem('student',data.loginAs)

        this.router.navigate(['studentDashboard']);
      }

    })

  }

}
