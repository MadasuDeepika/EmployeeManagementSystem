import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageEmployeesComponent } from './manage-employees.component';
import { UserformComponent } from '../components/userform/userform.component';

const routes: Routes = [
  { path: '', component: ManageEmployeesComponent },
  { path: 'add', component: UserformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageEmployeesRoutingModule {}
