import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private authService: AuthService,
    private http: HttpService
  ) { }

  newPassword(password: string): Observable<any>{
    return this.http.patch<any>('/admin/'+ this.authService.getId() +'/changepassword/'  , {password: password} )
  }

  newEmail(email: string): Observable<any>{
    return this.http.patch<any>('/admin/'+ this.authService.getId() +'/changepassword/' , {email: email} )
  }
}
 