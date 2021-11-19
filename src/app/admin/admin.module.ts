import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListComponent } from './components/list/list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListUnvalidatedComponent } from './components/list-unvalidated/list-unvalidated.component';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionModalComponent } from './components/action-modal/action-modal.component';


@NgModule({
  declarations: [
    AdminComponent,
    ListComponent,
    ProfileComponent,
    ListUnvalidatedComponent,
    ActionModalComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
