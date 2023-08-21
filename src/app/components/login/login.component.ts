import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TUI_IS_CYPRESS } from '@taiga-ui/cdk';
import { TuiTextfieldCleanerDirective } from '@taiga-ui/core';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private fb:FirebaseService){}
  readonly testForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email] ),
    password: new FormControl('', Validators.required),
  });

    onSubmit(){
      this.fb.addUser({
        email:this.testForm.value.email!,
        password: this.testForm.value.password!,
      })
      console.log(this.testForm.value)
    }
}
