import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CanActive implements CanActivate {
  
  constructor(public router : Router) {}
  
  canActivate():boolean
  {
    let token= localStorage.getItem('token');
    if(token)
    {
     let helper=new JwtHelperService();

     //decoded the encoded token
      let decodedToken=helper.decodeToken(token);

      //to get current time stamp use math.floor(Date.now(),1000);
      if(decodedToken.exp==Math.floor(Date.now()/1000 ))
      {
        return true;
      }
      else{
        alert ("sorry...! token expired");
        this.router.navigate(['login']);
        return false;
      }
    }
  }
}
