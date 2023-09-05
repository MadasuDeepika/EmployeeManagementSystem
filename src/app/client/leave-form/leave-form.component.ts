import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.scss'],
})
export class LeaveFormComponent {
  @Output() update = new EventEmitter<any>();
  load = false;
  startDate: Date;
  constructor(private auth: AuthService, private db: FirebaseService) {
    this.startDate = new Date();
  }
  types = ['sl', 'cl'];
  leaveForm = new FormGroup({
    type: new FormControl('', Validators.required),
    reason: new FormControl('', [Validators.required, Validators.minLength(5)]),
    from: new FormControl<Date | null>(null, [Validators.required]),
    to: new FormControl<Date | null>(null),
  });

  onSubmit() {
    this.load = true;
    if (this.leaveForm.value.type == 'cl') this.update.emit('cl');
    else this.update.emit('sl');
    this.db
      .requestLeave({ id: this.auth.getUser().id, ...this.leaveForm.value })
      .subscribe(
        (res) => {this.load = false;this.leaveForm.reset()},
        (err) => console.log(err)
      );
  }
}
