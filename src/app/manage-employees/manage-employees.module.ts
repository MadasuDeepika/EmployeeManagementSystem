import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageEmployeesRoutingModule } from './manage-employees-routing.module';
import { ManageEmployeesComponent } from './manage-employees.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TuiBreadcrumbsModule } from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiDialogModule,
  TuiLinkModule,
  TuiLoaderModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { TuiItemModule } from '@taiga-ui/cdk';
import { UserformComponent } from '../components/userform/userform.component';

@NgModule({
  declarations: [ManageEmployeesComponent],
  imports: [
    CommonModule,
    ManageEmployeesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    TuiButtonModule,
    TuiBreadcrumbsModule,
    TuiLinkModule,
    TuiItemModule,
    TuiSvgModule,
    TuiDialogModule,
    TuiLoaderModule,
    UserformComponent
  ],
})
export class ManageEmployeesModule {}
