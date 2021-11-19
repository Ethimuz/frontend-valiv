import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  public hidePass: boolean;
  public hideConfirmPass: boolean;
  public registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.hidePass = true;
    this.hideConfirmPass = true;
    this.registerForm = this.formBuilder.group({
      
        name: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,32}')]],
        lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,32}')]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('[0-9]{8}')]],
        nameHospital: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,32}')]],
        especialidad: ['', [Validators.required]],
        password: ['', [Validators.required]],
        validatePassword: ['', [Validators.required]],

    });
  }

  get email() { return this.registerForm?.get('email'); }
  get name() { return this.registerForm?.get('name')?.value }
  get lastName() { return this.registerForm?.get('lastName')?.value }
  get phone() { return this.registerForm?.get('phone')?.value }
  get nameHospital() { return this.registerForm?.get('nameHospital')?.value }
  get especialidad() { return this.registerForm?.get('especialidad')?.value }
  get password() { return this.registerForm?.get('password')?.value }

  getErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email?.hasError('emailReq') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
    
  }

  async onSubmit() {
    try {
      await this.authService.register(
        this.name,
        this.lastName,
        this.email?.value,
        this.phone,
        this.nameHospital,
        this.especialidad,
        this.password
      ).toPromise();
      this.router.navigate(['/visitor/login']);
    } catch (error) {
      console.log(error);
    } 
  }

}
