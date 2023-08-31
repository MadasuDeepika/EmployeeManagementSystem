import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageLeavesRoutingModule } from './manage-leaves-routing.module';
import { ManageLeavesComponent } from './manage-leaves.component';


@NgModule({
  declarations: [
    ManageLeavesComponent
  ],
  imports: [
    CommonModule,
    ManageLeavesRoutingModule
  ]
})
export class ManageLeavesModule { }
