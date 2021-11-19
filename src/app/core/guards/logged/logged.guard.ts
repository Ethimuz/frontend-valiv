import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
  
  constructor(
    private router: Router,
    private authservice: AuthService
  ) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authservice.isLogged()){
        if(this.authservice.entity() === 'User'){
          this.router.navigate(['/user']);
          return false;
        }
        if(this.authservice.entity() === 'Admin'){
          this.router.navigate(['/admin']);
          return false;
        }
      }
      
      return true;
  }
  
}
