import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { LeaveRequestComponent } from './leave-request/leave-request.component';


@NgModule({
  declarations: [
    LeaveRequestComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
