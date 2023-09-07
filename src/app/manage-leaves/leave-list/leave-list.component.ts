import { Component } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { each } from 'jquery';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.scss'],
})
export class LeaveListComponent {
  load = false;
  leave: any;
  arr: any[] = [];;
  name: any;
  email: any;
  position: any;
  constructor(
    private fb: FirebaseService,
    private readonly dialogs: TuiDialogService
  ) {
    this.getLeaves();
  }
  leaves: object[] = [];

  getLeaves() {
    this.arr = [];
    this.load = true;
    this.fb.getLeaves().subscribe((leaves) => {
      Object.values(leaves).map((eachUser: any) => {
        Object.entries(eachUser).forEach(([uid, val]) => {
          this.arr.push({
            key:uid,
            val
          });
        });
      });
      this.load = false;
    });
  }

  showDialog(content: any, id: string): void {
    this.fb.getUserById(id).subscribe((data) => {
      this.name = data.name;
      this.email = data.email;
      this.position = data.position;
      this.dialogs.open(content).subscribe();
    });
  }

  accept(key:any,id: any) {
    this.load = true;
    this.fb.acceptLeave(key,id).subscribe((res) => this.getLeaves());
  }

  reject(key:any,id: any) {
    this.load = true;
    this.fb.rejectLeave(key,id).subscribe((res) => this.getLeaves());
  }
}
