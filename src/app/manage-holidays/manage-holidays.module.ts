import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageHolidaysRoutingModule } from './manage-holidays-routing.module';
import {
  TuiBreadcrumbsModule,
  TuiInputModule,
  TuiIslandModule,
  TuiRadioLabeledModule,
} from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiLinkModule,
  TuiLoaderModule,
  TuiGroupModule,
  TuiSvgModule,
  TuiErrorModule,
} from '@taiga-ui/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HolidayformComponent } from './holidayform/holidayform.component';
import { ListHolidaysComponent } from './list-holidays/list-holidays.component';

@NgModule({
  declarations: [ListHolidaysComponent, HolidayformComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ManageHolidaysRoutingModule,
    TuiIslandModule,
    TuiBreadcrumbsModule,
    TuiLinkModule,
    TuiSvgModule,
    TuiLoaderModule,
    TuiDataListModule,
    TuiInputModule,
    MatFormFieldModule,
    MatInputModule,
    TuiButtonModule,
    TuiGroupModule,
    TuiErrorModule,
    TuiRadioLabeledModule,
  ],
})
export class ManageHolidaysModule {}
