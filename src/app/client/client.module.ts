import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LeaveFormComponent } from './leave-form/leave-form.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { TuiButtonModule, TuiLoaderModule, TuiNotificationModule, TuiSvgModule } from '@taiga-ui/core';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    LeaveRequestComponent,
    LeaveFormComponent,
    LeaveListComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatButtonModule,
    TuiLoaderModule,
    TuiSvgModule,
    MatTableModule,
    TuiButtonModule,
    TuiNotificationModule,
    MatSortModule
  ]
})
export class ClientModule { }
