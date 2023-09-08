import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TuiAppBarModule, TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TuiActiveZoneModule, TuiItemModule } from '@taiga-ui/cdk';
import {
  TuiAlertModule,
  TuiButtonModule,
  TuiDataListModule,
  TuiDialogModule,
  TuiDialogService,
  TuiDropdownModule,
  TuiHostedDropdownModule,
  TuiLinkModule,
  TuiLoaderModule,
  TuiNotificationModule,
  TuiRootModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiAccordionModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiRootModule,
    TuiSvgModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiDropdownModule,
    TuiLinkModule,
    TuiButtonModule,
    TuiItemModule,
    TuiAppBarModule,
    TuiAlertModule,
    TuiDialogModule,
    TuiNotificationModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiTextfieldControllerModule,
    TuiLoaderModule,
    TuiAccordionModule,
    TuiSidebarModule,
    TuiActiveZoneModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  load = false;
  invalidPassword: boolean = false;
  constructor(
    private auth: AuthService,
    private dialogs: TuiDialogService,
    private router: Router,
  ) {}

  readonly loginForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.load = true;
    this.auth
      .login(
        this.loginForm.value.id!.toLocaleLowerCase(),
        this.loginForm.value.password!
      )
      .subscribe((data) => {
        if (data) {
          if (data.password === this.loginForm.value.password) {
            if (data.role == 'admin'){
              localStorage.setItem('token', JSON.stringify({user: data}));
            this.router.navigate(['/dashboard/admin']);
            }
            else {
              localStorage.setItem('token', JSON.stringify({user: data}));
              this.router.navigate(['/dashboard/user'])
            }
            
          } else {
            this.invalidPassword = true;
            this.load = false;
          }
        } else {
          this.load = false;
          this.showDialogWithCustomButton();
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
      .subscribe((complete) => console.log('closed'));
  }
}
