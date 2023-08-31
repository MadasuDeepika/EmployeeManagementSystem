import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageLeavesComponent } from './manage-leaves.component';

const routes: Routes = [{ path: '', component: ManageLeavesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageLeavesRoutingModule { }
