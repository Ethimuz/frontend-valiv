
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { TokenService } from '../token/token.service';
import { HttpService } from '../http/http.service';
import { Router } from '@angular/router';
import { NullTemplateVisitor } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private tokenService: TokenService,
    private http: HttpService,
    private router: Router
  )
  {  }

  Login(email: string, password: string) {
    return this.http.post('/auth/login',
    {
      email,
      password
    }).pipe(
      tap(
        (data: any) => {
          console.log(data)
          this.tokenService.saveToken(data);
          this.loginPath();
        }
      )
    )
  }

  register(name: String, lastname: String,
    email: String,
    phone: number,
    institution: string,
    speciality: string,
    password: String) {
    return this.http.post('/auth/user/register',
  {
    name,
    lastname,
    email,
    phone,
    institution,
    speciality,
    password    
  }).pipe(
    tap(
      (data: any) => {
        this.router.navigate(['/user/upload']);
      }
    )
  )

  }

  logout() {
    this.tokenService.removeToken();
    this.router.navigate(['visitor/landing']);
  }

  isLogged(): boolean{    
    return this.tokenService.isLogged();
  }

  getId(): string{
    const id = this.tokenService.getId();
    if (id) {
      return id;
    } else {
      return "";
    }
  }

  entity(): string | null {
    return this.tokenService.entity();
  }
  
  loginPath() {    
    const entity = this.tokenService.entity();
    if (entity === 'Admin')
      this.router.navigate(['/admin/usuarios']);
    else
      this.router.navigate(['/user/upload']);
  }
  
}
