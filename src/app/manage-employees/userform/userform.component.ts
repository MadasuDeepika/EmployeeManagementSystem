import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiInputModule, TuiRadioLabeledModule } from '@taiga-ui/kit';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiErrorModule, TuiGroupModule, TuiLoaderModule } from '@taiga-ui/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-userform',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiRadioLabeledModule,
    TuiErrorModule,
    TuiButtonModule,
    TuiGroupModule,
  TuiLoaderModule],
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent {
  load = false;
  @Input() observer:any;
  @Input() Id:any;
  @Input() Name:any;
  @Input() email:any;
  @Input() position:any;
  @Input() edit!:boolean;
  @Output() done: EventEmitter<any> = new EventEmitter();
  constructor(private fb:FormBuilder,private db:FirebaseService){
  }
  readonly roles = ['admin', 'employee'];
  userForm:any;

  ngOnChanges(changes: SimpleChanges){
    if (this.edit){
      this.userForm = this.fb.group({
        id: [''],
        name: [this.Name],
        email: [this.email],
        password: [''],
        position: [this.position],
        role: ['employee']
      });
    }else{
      this.userForm = this.fb.group({
        id: [''],
        name: [''],
        email: [''],
        password: [''],
        position: [''],
        role: ['employee']
      });
    }
  }

  onSubmit(){
    this.load = true;
    if(this.edit){
      this.db.updateUser({
        name:this.userForm.value.name!,
        email:this.userForm.value.email!,
        position: this.userForm.value.position!,
        role: this.userForm.value.role!
      },this.Id).subscribe(data =>{
        this.done.emit(this.edit);
        this.load = false;
        this.observer.complete();
      });
    }else {
      this.db.addUser({
        id: this.userForm.value.id!,
        name:this.userForm.value.name!,
        email:this.userForm.value.email!,
        password: this.userForm.value.password!,
        position: this.userForm.value.position!,
        role: this.userForm.value.role!
      }).subscribe(data =>{
        this.done.emit(this.edit);
        this.load = false;
        this.observer.complete();
      });
    }
   
  }
}
