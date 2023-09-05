import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss']
})
export class LeaveRequestComponent {
  cl:any;
  sl:any;
  id:any;
constructor(private auth: AuthService){
  this.cl = this.auth.getUser().leaves.cl;
  this.sl = this.auth.getUser().leaves.sl;
  this.id = this.auth.getUser().id;
}
update(type:any){
  if (type == 'cl')
  this.cl = this.cl - 1
else this.sl = this.sl -1 
}
}
