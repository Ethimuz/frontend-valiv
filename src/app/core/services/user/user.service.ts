import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authService: AuthService,
    private http: HttpService
  ) { }

  validateUser(user: User): Observable<User> {
    user.verified = true;
    return this.http.patch<User>('/user/' + user._id, user )
  }

  newPassword(password: string): Observable<any>{
    return this.http.patch<any>('/user/' + this.authService.getId() +'/password/', {password: password} )
  }

  newEmail(email: string): Observable<any>{
    return this.http.patch<any>('/user/' + this.authService.getId() +'/email/' , {email: email} )
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/user/all');
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>('/user/' + id);
  }

  getUnvalidates(): Observable<User[]> {
    return this.http.get<User[]>('/user/unvalidated');
  }

  updateUser(user: Partial<User>): Observable<User>{
    return this.http.patch<User>('/user/' + this.authService.getId(), user);
  }
}
