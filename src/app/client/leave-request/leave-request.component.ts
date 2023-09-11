import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss']
})
export class LeaveRequestComponent {
  load = false;
  cl:any;
  sl:any;
  id:any;
constructor(private auth: AuthService,private db: FirebaseService){
  this.load = true;
  this.id = this.auth.getUser().id;
  this.db.getUserById(this.id).subscribe(user=>{this.cl = user.leaves.cl;this.sl = user.leaves.sl;this.load = false;});
}
update(type:any){
//   if (type == 'cl')
//   {this.cl = this.cl - 1;
//   this.db.updateCL(this.id,this.cl).subscribe(res=>console.log(res));
//   }
// else {this.sl = this.sl -1 ;
//   this.db.updateSL(this.id,this.cl).subscribe(res=>console.log(res));
// }
}
}
