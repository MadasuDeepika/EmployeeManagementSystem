import { Component, Inject, ViewChild } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  TuiAlertService,
  TuiDialogContext,
  TuiDialogService,
} from '@taiga-ui/core';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.scss'],
})
export class ManageEmployeesComponent {
  showForm = false;
  users: any;
  dataSource!: MatTableDataSource<any>;
  load = false;
  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    private fb: FirebaseService,
    private alerts: TuiAlertService
  ) {
    this.loadUsers();
  }

  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadUsers() {
    this.load = true;
    this.fb.getUsers().subscribe((users: any) => {
      let employees = Object.values(users).filter(
        (user: any) => user.role != 'admin' && user.deleted != true
      );
      this.dataSource = new MatTableDataSource(employees);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.load = false;
    });
  }

  deleteUser(id: string) {
    this.fb.deleteUserById(id).subscribe((data) => {
      this.deleteAlert(id);
    });
  }
  showDialog(content: any): void {
    this.dialogs.open(content).subscribe();
  }
  deleteAlert(id: string): void {
    this.alerts
      .open(`Deleted user with id ${id}`, { label: 'Success' })
      .subscribe();
      this.loadUsers()
  }
  addAlert() {
    this.alerts
      .open(`Added new user`, { label: 'Success' })
      .subscribe();
      this.loadUsers()
  }
}
