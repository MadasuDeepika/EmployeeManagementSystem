import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.scss']
})
export class LeaveListComponent {
  load = false
  constructor(private fb: FirebaseService){
    this.getLeaves()
  }
  leaves:any;
  getLeaves() {
    this.load = true
    this.fb.getLeaves().subscribe(leaves=> {this.leaves = Object.values(leaves);this.load = false});
  }
  
}
