import { Component } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.scss']
})
export class LeaveListComponent {
  load = false
  leave:any;
  arr:any;
  name:any;
  email:any;
  position:any;
  constructor(private fb: FirebaseService,private readonly dialogs: TuiDialogService){
    this.getLeaves()
  }
  leaves:any;
  getLeaves() {
    this.load = true
    this.fb.getLeaves().subscribe(leaves=> {this.arr=Object.keys(leaves).map(key=>({
      key:key,
      ...leaves[key]
    }));this.leaves = Object.values(leaves);this.load = false});
  }

  showDialog(content: any,id:string): void {
    this.fb.getUserById(id).subscribe(data=>{
      this.name = data.name;
      this.email = data.email;
      this.position = data.position;
      this.dialogs.open(content).subscribe();
    })
  }

  accept(id:any) {
    this.load = true;
    this.fb.acceptLeave(id).subscribe(res=>this.getLeaves())
  }

  reject(id:any) {
    this.load = true;
    this.fb.rejectLeave(id).subscribe(res=>this.getLeaves())
  }
  
}
