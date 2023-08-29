import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageEmployeesComponent } from '../manage-employees/manage-employees.component';
import { ManageHolidaysComponent } from './manage-holidays.component';

const routes: Routes = [{path:'', component: ManageHolidaysComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageHolidaysRoutingModule { }
