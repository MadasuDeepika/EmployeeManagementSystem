import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-holidayform',
  templateUrl: './holidayform.component.html',
  styleUrls: ['./holidayform.component.scss']
})
export class HolidayformComponent {
  @Input() Name:any;
  @Input() type:any;
  @Input() date:any;
  @Input() index:any;
  holidayForm:any;
  constructor(private fb: FormBuilder,private db:FirebaseService) {}

  ngOnChanges(changes: SimpleChanges): void {   
    console.log(this.index);
     
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
