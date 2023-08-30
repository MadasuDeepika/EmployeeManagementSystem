import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAccordionModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,
  TuiAccordionModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

}
