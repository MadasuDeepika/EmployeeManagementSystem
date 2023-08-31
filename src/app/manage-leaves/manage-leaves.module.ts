import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageLeavesRoutingModule } from './manage-leaves-routing.module';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { TuiBreadcrumbsModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiLinkModule, TuiSvgModule } from '@taiga-ui/core';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    LeaveListComponent,
    LeaveRequestComponent,
    LeaveFormComponent
  ],
  imports: [
    CommonModule,
    ManageLeavesRoutingModule,
    TuiBreadcrumbsModule,
    TuiLinkModule,
    TuiSvgModule,
    TuiButtonModule,
    MatButtonModule,
  ]
})
export class ManageLeavesModule { }
