import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageLeavesRoutingModule } from './manage-leaves-routing.module';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { TuiBreadcrumbsModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiLinkModule, TuiSvgModule, TuiLoaderModule} from '@taiga-ui/core';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    LeaveListComponent
  ],
  imports: [
    CommonModule,
    ManageLeavesRoutingModule,
    TuiBreadcrumbsModule,
    TuiLinkModule,
    TuiSvgModule,
    TuiButtonModule,
    MatButtonModule,
    TuiLoaderModule,
  ]
})
export class ManageLeavesModule { }
