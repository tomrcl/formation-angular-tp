import { LoginService } from './services/login-service/login.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() isLoginChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  public loginInError: boolean = false;

  public loginFormGroup: FormGroup = this._formBuilder.group({
    login: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', Validators.required]
  });

  constructor(
    private _formBuilder: FormBuilder, 
    private _loginService: LoginService) { }

  ngOnInit(): void {
    this._loginService.previouslyLogged()
      .then(res => console.log('previousLogged', res))
  }

  async onSubmit() {
    this.loginInError = false;
    const isLogin: boolean = await this._loginService.checkUser(
      {
        login: this.loginFormGroup.get('login').value,
        password: this.loginFormGroup.get('password').value
      });

    if (isLogin) {
      this.isLoginChange.emit(isLogin);
    } else {
      this.loginInError = true;
    }
  }

}
