import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  load = false;
  leaves:any[] = [];
  cl:any;
  sl:any;
  id:any;
constructor(private auth: AuthService,private db: FirebaseService){
  this.id = this.auth.getUser().id;
  this.loadLeaves();
  this.db.getUserById(this.id).subscribe(user=>{this.cl = user.leaves.cl;this.sl = user.leaves.sl;this.load = false;});
}

loadLeaves() {  
  this.load = true;
  this.db.getLeavesById(this.id).subscribe((data) => {
    let arr = Object.keys(data).map((key) => {
      return {
        key: key,
        ...data[key],
      };
    });    
    this.leaves = arr;
    this.load = false;    
  });
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
