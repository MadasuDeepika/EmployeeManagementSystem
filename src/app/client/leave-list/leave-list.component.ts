import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TuiDialogService } from '@taiga-ui/core';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaveListComponent implements OnChanges,OnInit {
  @Input() ID!: string;
  @Input() type!: any;
  leaves:any;
  arr!: any[];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns!: string[];

  constructor(
    private db: FirebaseService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService
  ) {
    
  }

  ngOnInit(): void {
    this.db.getLeavesById(this.ID);
    this.db.userLeaves$.subscribe(data=>{this.leaves = data;
    })
  }

  loadLeaves(type:string) {    
    if(type == 'pending'){
      this.db.userLeaves$.subscribe((data) => {
        
        this.arr = Object.keys(data).map((key) => {
            return {
              key: key,
              ...data[key],
            }
        });
        this.dataSource = new MatTableDataSource(
          this.arr.filter((leave) => leave.status == 'pending')
        );
        this.dataSource.sort = this.sort;
      });
    }else {
      this.db.userLeaves$.subscribe((data) => {

        this.arr = Object.keys(data).map((key) => {
            return {
              key: key,
              ...data[key],
            }
        });
        this.dataSource = new MatTableDataSource(
          this.arr.filter((leave) => leave.status != 'pending')
        );
        this.dataSource.sort = this.sort;

      });
    }
  
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.type == 'pending') {
      this.displayedColumns = ['type', 'reason', 'from', 'to', 'action'];
      this.loadLeaves(this.type);
    } else {
      this.displayedColumns = ['type', 'reason', 'from', 'to', 'status'];
      this.loadLeaves('')
    }
  }

  showDialog(content: any): void {
    this.dialogs.open(content).subscribe();
  }

  onDelete(key: any) {
    this.db.deleteLeave(this.ID,key).subscribe(res=>{this.loadLeaves(this.type)}
    )
  }
}
