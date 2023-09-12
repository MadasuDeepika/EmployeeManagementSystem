import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.scss'],
})
export class LeaveFormComponent implements OnChanges{
  @Input() edit!:any;
  @Input() type!:any;
  @Input() reason!:any;
  @Input() from!:any;
  @Input() ID!: string;
  @Input() to!:any;
  @Output() update = new EventEmitter<any>();
  @Input() sl!:any;;
  @Input() cl!:any;;
  @Input() load: any;
  success = false;
  successMsg = "Leave Applied"
  error = false;
  errorMsg = '';
  @Output() loadChange = new EventEmitter<boolean>();

  constructor(private auth: AuthService, private db: FirebaseService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.edit){
      this.leaveForm =new FormGroup({
        type: new FormControl(this.type, Validators.required),
        reason: new FormControl(this.reason, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
        from: new FormControl(this.from, [Validators.required]),
        to: new FormControl(this.to),
      });
    }else {
      this.leaveForm = new FormGroup({
        type: new FormControl('', Validators.required),
        reason: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
        from: new FormControl('', [Validators.required]),
        to: new FormControl(),
      });
    }
  }
  types = ['sl', 'cl'];
  leaveForm:any;

  onSubmit() {
    this.load = true;
    this.error = false;
    this.success = false;
    const leave = this.leaveForm.value;
    let from = leave.from;
    let to = leave.to;
    let range = this.range(from, to);
    if (leave.type == 'sl' && this.sl && range <= this.sl) {

      this.db
        .requestLeave({ id: this.auth.getUser().id, ...this.leaveForm.value })
        .subscribe(
          (res) => {
            this.load = false;
            this.success = true;
            setTimeout(()=>{this.success=false},5000)
            this.successMsg = `Sick ${this.successMsg}`
            this.leaveForm.reset(this.leaveForm.value);
            this.update.emit({ type: 'sl', left: this.sl - range });
          },
          (err) => console.log(err)
        );
    } else if (leave.type == 'sl' && range > this.sl) {
      this.errorMsg = `Only ${this.sl} Sick Leaves Left!`;
      this.error = true;
      this.load = false;
      setTimeout(()=>{this.error=false},5000)
    }
    if (leave.type == 'cl' && this.cl && range <= this.cl) {
      this.db
        .requestLeave({ id: this.auth.getUser().id, ...this.leaveForm.value })
        .subscribe(
          (res) => {
            this.load = false;
            this.success = true;
            this.successMsg = `Casual ${this.successMsg}`
            setTimeout(()=>{this.success=false},5000)
            this.leaveForm.reset(this.leaveForm.value);
            this.update.emit({ type: 'cl', left: this.cl - range });
          },
          (err) => console.log(err)
        );
    } else if (leave.type == 'cl' && range > this.cl) {
      this.errorMsg = `Only ${this.cl} Casual Leaves Left!`;
      this.error = true;
      setTimeout(()=>{this.error=false},5000)
      this.load = false;
    }

    // let range:number = parseInt(leave.to) ? (parseInt(leave.to)-parseInt(leave.from)):1;
    // if (this.leaveForm.value.type == 'cl') {
    //   this.update.emit('cl');
    // }
    // else {
    //   this.update.emit('sl');
    // }
  }
  range(from: any, to: any) {
    if(to)
    return (to.getTime() - from.getTime()) / (1000 * 3600 * 24) + 1;
  else return 1
  }
}
