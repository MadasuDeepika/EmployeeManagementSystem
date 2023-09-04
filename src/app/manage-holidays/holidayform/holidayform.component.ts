import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputDateModule, TuiInputModule, TuiRadioLabeledModule } from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiErrorModule,
  TuiGroupModule,
  TuiLoaderModule,
} from '@taiga-ui/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-holidayform',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiRadioLabeledModule,
    TuiErrorModule,
    TuiButtonModule,
    TuiGroupModule,
    TuiLoaderModule,
    TuiInputDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './holidayform.component.html',
  styleUrls: ['./holidayform.component.scss'],
})
export class HolidayformComponent implements OnChanges{
  @Input() Name:any;
  @Input() type:any;
  @Input() date:any;
  @Input() index:any;
  holidayForm:any;
  constructor(private fb: FormBuilder,private db:FirebaseService) {}

  ngOnChanges(changes: SimpleChanges): void {        
    this.holidayForm = this.fb.group({
      name: [this.Name],
      type: [this.type],
      date: [this.date],
    });
  }
  edit = true;
  load = false;
  readonly types = ['National Holiday', 'Religious Holiday'];


  onSubmit() {
    this.db.updateHoliday(this.holidayForm.value,this.index).subscribe(data=> console.log("updated"))
  }
}