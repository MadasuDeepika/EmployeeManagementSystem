import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageHolidaysRoutingModule } from './manage-holidays-routing.module';
import { TuiBreadcrumbsModule, TuiInputModule, TuiIslandModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiDataListModule, TuiLinkModule, TuiLoaderModule, TuiSvgModule } from '@taiga-ui/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HolidayformComponent } from './holidayform/holidayform.component';
import { ListHolidaysComponent } from './list-holidays/list-holidays.component';


@NgModule({
  declarations: [
    ListHolidaysComponent
  ],
  imports: [
    CommonModule,
    ManageHolidaysRoutingModule,
    TuiIslandModule,
    TuiBreadcrumbsModule,
    TuiLinkModule,
    TuiSvgModule,
    TuiLoaderModule,
    TuiDataListModule,
    TuiInputModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    TuiButtonModule,
    HolidayformComponent
  ],
})
export class ManageHolidaysModule { 

}
