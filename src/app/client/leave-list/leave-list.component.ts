import {
  Component,
  Inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TuiDialogService } from '@taiga-ui/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.scss'],
})
export class LeaveListComponent implements OnChanges {
  @Input() ID!: string;
  @Input() type!: any;
  arr!: any[];
  dataSource!: MatTableDataSource<any>;
  displayedColumns!: string[];

  constructor(
    private db: FirebaseService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.type == 'pending') {
      this.displayedColumns = ['type', 'reason', 'from', 'to', 'action'];
      const objectData: { [key: string]: string } = {};
      this.db.getLeavesById(this.ID).subscribe((data) => {
        this.arr = Object.keys(data).map((key) => {
          if (data[key].status == 'pending') {
            return {
              key: key,
              ...data[key],
            };
          } else {
            return null;
          }
        });
        this.dataSource = new MatTableDataSource(
          this.arr.filter((leave) => leave !== null)
        );
      });
    } else {
      this.displayedColumns = ['type', 'reason', 'from', 'to', 'status'];
      const objectData: { [key: string]: string } = {};
      this.db.getLeavesById(this.ID).subscribe((data) => {
        this.arr = Object.keys(data).map((key) => {
          if (data[key].status != 'pending') {
            return {
              key: key,
              ...data[key],
            };
          } else {
            return null;
          }
        });
        this.dataSource = new MatTableDataSource(
          this.arr.filter((leave) => leave !== null)
        );
      });
    }
  }

  showDialog(content: any): void {
    this.dialogs.open(content).subscribe();
  }

  onDelete(key: any) {
    console.log('deleted ', key);
  }
}
