import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';
import { UserService } from '../../../core/services/user/user.service';
import { TokenService } from '../../../core/services/token/token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  public hideP = true;
  public hideNewP = true;
  public hideConfirmP = true;
  public registerForm: FormGroup;
  public emailForm: FormGroup;
  public passForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private UserService: UserService
    
    
  ){  
    this.registerForm = this.formBuilder.group({
        name: ['', [Validators.pattern('[a-zA-Z]{2,32}')]],
        lastName: ['', [Validators.pattern('[a-zA-Z]{2,32}')]],
        nameHospital: ['', [ Validators.pattern('[a-zA-Z]{2,32}')]],
        especialidad: ['', []]
    });
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      emailNew: ['', [Validators.required, Validators.email]],
      emailConfirm: ['', [Validators.required, Validators.email]],
    });

    this.passForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      validatePassword: ['', [Validators.required]],
    });
  }
  get name() { return this.registerForm?.get('name'); }
  get lastName() { return this.registerForm?.get('lastNam'); }
  get nameHospital() { return this.registerForm?.get('nameHospital'); }
  get especialidad() { return this.registerForm?.get('especialidad'); }
  get email() { return this.registerForm?.get('email'); }
  get emailNew() { return this.registerForm?.get('emailNew'); }
  get emailConfirm() { return this.registerForm?.get('emailConfirm'); }
  get password() { return this.passForm?.get('password'); }

  getErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'Introduce un correo valido';
    }
    return this.email?.hasError('emailReq') ? 'No es un email valido' : '';
  }
  
  ngOnInit(): void {
    
  }

  onSubmit(){
    
  }

  async onSubmitData() {
    let user: Partial<User> = {
      name: this.name?.value,
      lastname: this.lastName?.value,
      institution: this.nameHospital?.value,
      speciality: this.especialidad?.value
    }
    await this.UserService.updateUser(user)
  }

  async onSubmitEmail(){
    await this.UserService.newEmail(this.emailNew?.value).toPromise();
  }

  async onSubmitPassword(){
    await this.UserService.newPassword(this.password?.value).toPromise();
  }


}
