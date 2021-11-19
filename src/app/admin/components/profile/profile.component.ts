import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../core/services/admin/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  public hideP = true;
  public hideNewP = true;
  public hideConfirmP = true;
  public emailForm: FormGroup;
  public passwordForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService
    
    
  ){  
    this.emailForm = this.formBuilder.group({
      
        email: ['', [Validators.required, Validators.email]],
        emailNew: ['', [Validators.required, Validators.email]],
        emailConfirm: ['', [Validators.required, Validators.email]]

    });
    this.passwordForm = this.formBuilder.group({
    
      password: ['', [Validators.required]],
      validatePassword: ['', [Validators.required]],

  });
  }


  get email() { return this.emailForm?.get('email'); }
  get emailNew() { return this.emailForm?.get('emailNew'); }
  get emailConfirm() { return this.emailForm?.get('emailConfirm'); }
  get password() { return this.passwordForm?.get('password') }
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

  async onSubmitEmail() {
    await this.adminService.newEmail(this.emailNew?.value).toPromise();
  }

  async onSubmitPass() {
    await this.adminService.newPassword(this.password?.value).toPromise();
  }

}
