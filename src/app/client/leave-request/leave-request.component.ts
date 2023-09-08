import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss']
})
export class LeaveRequestComponent {
  cl:any;
  sl:any;
  id:any;
  load = false;
constructor(private auth: AuthService,private db: FirebaseService){
  this.id = this.auth.getUser().id;
  this.loadLeaves();
}
update(data:any){  
  if (data.type == 'cl'){
  this.db.updateCL(this.id,data.left).subscribe(res=>this.loadLeaves());
  }
else if(data.type == 'sl'){
  this.db.updateSL(this.id,data.left).subscribe(res=>this.loadLeaves());
}
}

loadLeaves(){
  this.load = true;
  this.db.getUserById(this.id).subscribe(user=>{this.cl = user.leaves.cl;this.sl = user.leaves.sl;this.load = false;});
}
}
