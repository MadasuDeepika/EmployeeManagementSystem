import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageLeavesRoutingModule } from './manage-leaves-routing.module';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';


@NgModule({
  declarations: [
    LeaveListComponent,
    LeaveRequestComponent,
    LeaveFormComponent
  ],
  imports: [
    CommonModule,
    ManageLeavesRoutingModule
  ]
})
export class ManageLeavesModule { }
