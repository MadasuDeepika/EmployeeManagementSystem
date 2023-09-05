import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TuiDialogService } from '@taiga-ui/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.scss']
})
export class LeaveListComponent implements OnChanges{
  @Input() ID!:string;
  arr!:any[];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['type', 'reason', 'from', 'to','action'];

  constructor(private db:FirebaseService,@Inject(TuiDialogService) private readonly dialogs: TuiDialogService){}

  ngOnChanges(changes: SimpleChanges): void {
    const objectData: { [key: string]: string } = {};
    this.db.getLeavesById(this.ID).subscribe(data=>{
      this.arr= Object.keys(data).map(key=>({
        key:key,
        ...data[key]
      }))
      this.dataSource = new MatTableDataSource(this.arr)})
  }

  showDialog(content: any): void {
    this.dialogs.open(content).subscribe();
  }

  onDelete(key:any){
    console.log("deleted ",key);
    
  }
}
