import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageHolidaysComponent } from './manage-holidays.component';

const routes: Routes = [{path:'', component: ManageHolidaysComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageHolidaysRoutingModule { }
