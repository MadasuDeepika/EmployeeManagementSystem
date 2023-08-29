import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiLinkModule, TuiSvgModule } from '@taiga-ui/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule,TuiButtonModule,RouterModule,TuiSvgModule,TuiLinkModule  ],
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent {
  elem:any;
constructor(private router:Router){
  this.elem = document.documentElement
}
openFullScreen(){
  // if (this.elem.requestFullscreen) {
  //   this.elem.requestFullscreen();
  // } else if (this.elem.mozRequestFullScreen) {
  //   /* Firefox */
  //   this.elem.mozRequestFullScreen();
  // } else if (this.elem.webkitRequestFullscreen) {
  //   /* Chrome, Safari and Opera */
  //   this.elem.webkitRequestFullscreen();
  // } else if (this.elem.msRequestFullscreen) {
  //   /* IE/Edge */
  //   this.elem.msRequestFullscreen();
  // }
  this.router.navigate(['login'])
}
}
