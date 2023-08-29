import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TUI_IS_CYPRESS } from '@taiga-ui/cdk';
import { TuiAlertService, TuiDialogService, TuiTextfieldCleanerDirective } from '@taiga-ui/core';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  load = false
  invalidPassword: boolean = false;
  constructor(
    private auth: AuthService,
    private dialogs: TuiDialogService,
    private alerts: TuiAlertService,
    private router: Router,
    private fb:FirebaseService
  ) {}

  readonly loginForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.load = true;
    this.auth
      .login(this.loginForm.value.id!.toLocaleLowerCase(), this.loginForm.value.password!)
      .subscribe((data) => {
        if (data) {
          if (data.password === this.loginForm.value.password) {
            localStorage.setItem('token', 'klfajsdhfoisdfnsdfkjlks');
            this.router.navigate(['/admin']);
          } else {this.invalidPassword = true;
          this.load = false;}
        } else {
          this.load = false;
          this.showDialogWithCustomButton()
        }
      });
  }

  showDialogWithCustomButton(): void {
    this.dialogs
      .open('ID does not exist!', {
        label: 'Oh no,',
        size: 's',
        data: { button: 'Retry' },
      })
      .subscribe(
        (complete)=>console.log("closed")
      );
  }
}
