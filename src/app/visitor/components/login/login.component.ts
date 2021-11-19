import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  
  public loginForm: FormGroup;
  public hide: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.hide = true;
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.pattern('^[a-zA-Z  0-9@$!%*?&.]{8,12}$')]],
      remember: [false],
    }
    );
  }

  ngOnInit(): void {
  }

  get email() { return this.loginForm?.get('email'); }
  get password() { return this.loginForm?.get('password'); }

  getEmailErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email?.hasError('email') ? 'Not a valid email' : '';
  }

   getPasswordErrorMessage() {
    if (this.password?.hasError('required')) {
      return 'Ingrese la contraseña';
    }
    return this.password?.invalid ? 'El dato ingresado no es una contraseña valida' : '';
  }

  async onSubmit(){
    try {
      
      await this.authService.Login(this.email?.value, this.password?.value).toPromise();
    } catch (error) {
    console.log(error);
    }
  }

}
