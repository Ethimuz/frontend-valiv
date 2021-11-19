import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Exam } from 'src/app/core/models/exam.models';
import { ExamService } from '../../../core/services/exam/exam.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CreateComponent implements OnInit {

  public hidePass: boolean;
  public hideConfirmPass: boolean;
  public createForm: FormGroup;
  public imagePath: string;
  public imgURL: any;
  public message: string;

  constructor(
    private formBuilder: FormBuilder,
    private examService: ExamService,
    private http: HttpClient
  ) {
    this.hidePass = true;
    this.hideConfirmPass = true;
    this.imagePath = '';
    this.message = '';
    this.createForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,32}')]],
        lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,32}')]],
        rut: ['', [Validators.required, Validators.pattern('[kK0-9]{8,10}')]],
        age: ['', [Validators.required, Validators.pattern('[0-9]{1,3}')]],
        phone: ['', [Validators.required], Validators.pattern('[0-9]{9}')],
    });
  }

  ngOnInit(): void {
    
  }

  get name() { return this.createForm?.get('name')?.value; }
  get lastName() { return this.createForm?.get('lastName')?.value; }
  get rut() { return this.createForm?.get('rut')?.value; }
  get age() { return this.createForm?.get('age')?.value; }
  get phone() { return this.createForm?.get('phone')?.value; }

  public preview(files: any) {
    if (files.length === 0) return;
      let mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }
    let reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

  async onSubmit() {
    let exam: Exam = {
      patientName: this.name,
      patientLastName: this.lastName,
      rut: this.rut,
      age: this.age,
      phone: this.phone
    }
    let prediction;
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
      })
    }
    try {
      prediction = await this.http.post<string>('http://127.0.0.1:5000/predict', this.imgURL, headers).toPromise();
      exam.prediction = prediction;
      exam.image = this.imgURL;
      await this.examService.saveExam(exam).toPromise();
    } catch (error) {
      console.log(error);
    }
    
  }

}
