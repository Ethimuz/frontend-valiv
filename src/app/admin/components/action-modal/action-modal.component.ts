import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-action-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: ['./action-modal.component.less']
})
export class ActionModalComponent implements OnInit {

  public user: User | null;

  constructor(
    private dialogRef: MatDialogRef<ActionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {event: string, user: User},
    private authService: AuthService,
    private userService: UserService
  ) { 
    if (data.user) this.user = data.user;
    else this.user = null;
  }

  ngOnInit(): void {
  }

  async action() {
    if (this.data.event === 'accept') {
      if (this.data.user._id)
        await this.userService.validateUser(this.data.user).toPromise();
    }
    if (this.data.event === 'reject' || this.data.event === 'delete') {
      if (this.data.user._id)
        await this.userService.deleteUser(this.data.user._id).toPromise();
    }
  }

  logout() {
    this.authService.logout(); 
  }
}
