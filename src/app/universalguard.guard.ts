import { Injectable } from '@angular/core';
import { CanActivate,CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ok } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class UniversalguardGuard implements CanActivate ,CanDeactivate<any>{

  canDeactivate(component:any,currentRoute:ActivatedRouteSnapshot,
    currentstate:RouterStateSnapshot):boolean{
    
      const url=currentRoute.url;
      const prevURL=currentstate.url;
     //console.log(url);
     // console.log(prevURL);


     const result=window.confirm('Are you sure!!');

      if(confirm){

      //  this.router.navigate(['login']);

      }
      else{
      //this.router.navigate(['products']);
      }
     return window.confirm('Are you sure!!')
  }
  constructor(private router:Router)
  {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      let allow=false;
      if(sessionStorage.getItem('logged')==='true')
      {
        allow=true;
      }
      else{
    this.router.navigate(['/login','Logged user can only access this page']);
      }
    return true;
  }
}
