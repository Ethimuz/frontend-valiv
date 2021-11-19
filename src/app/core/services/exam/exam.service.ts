import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Exam } from '../../models/exam.models';
import { map, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(
    private http: HttpService,
    private authService: AuthService
  ) { }

  analizeImage() {
    
  }

  saveExam(exam: Exam): Observable<Exam> {
    return this.http.post<Exam>('/exam/', exam);
  }

  getExams(): Observable<Exam[]>{
    return this.http.get<Exam[]>('/exam/all/' + this.authService.getId());    
  }

  deleteExam(id: string): Observable<Exam> {
    return this.http.delete('/exam/' + id);
  }



}
