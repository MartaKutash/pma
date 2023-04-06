import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { Validator } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signupUsers: any[] = [];
  signupObj: any = {
    login: '',
    password: ''
  };
  loginObj: any = {
    login: '',
    password: ''
  }

  constructor() {

}

ngOnInit(): void {

}

onLogin() {

}


}
