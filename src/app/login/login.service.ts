import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private hc:HttpClient, private router:Router) { }

  login(data):Observable <any>
  {
    if(data.loginAs=="admin")
    {
      return this.hc.post('/admin/login',data)
    }
    if(data.loginAs=="student")
    {
      return  this.hc.post('/student/login',data);
    }

  }

  logout(){
    localStorage.removeItem("token");
    // localStorage.removeItem("batchNo")
  }

  isLoggedIn(){
    let token = localStorage.getItem('token')
    if(token==null)
    {
      return false;
    }
    else if(token=="admin")
    {
        return false;
    }
    else
    {
      return true;
    }

   
  }


}
