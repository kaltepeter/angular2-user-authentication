import {Component, ViewChild} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage: string;

  @ViewChild('loginForm') loginForm: HTMLFormElement;

  constructor(private auth: AuthService) {
  }

  onLoginSubmit(credentials) {
    // call the login method on the AuthService
    // and call finishAuthentication if successful,
    // or display an error if unsuccessful
    this.auth.login(credentials)
      .subscribe(
        (token) => {
          this.auth.finishAuthentication(token);
        },
        err => this.handleErrors(err)
      );
  }

  onSignupSubmit(credentials) {
    // call the signup method on the AuthService
    // and call finishAuthentication if successful,
    // or display an error if unsuccessful
    this.auth.signup(credentials)
      .subscribe(
        (token) => {
          this.auth.finishAuthentication(token);
        },
        err => this.handleErrors(err)
      );
  }

  handleErrors(err) {
    this.errorMessage = err.message;
    // for (const key of err.validation.keys) {
    //   const field = this.loginForm.form.controls[key];
    //   field.setErrors('required', true);
    // }
  }

}
