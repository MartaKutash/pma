import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { Validator } from '@angular/forms'
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {Token, User} from "../services/interfaces";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: any = FormGroup;

constructor(private formBuilder: FormBuilder, private auth: AuthService) {

}

ngOnInit(): void {

}

token: Token | undefined;
  login() {
    console.log('login');
    let user = {
      login: this.form.get('login').value,
      password: this.form.get('password').value
    }

    console.log(user)
    console.log(this.form.value)

    this.auth.login(user).subscribe(data => {
      this.token = data
      console.log(data)
      console.log(this.token)
      localStorage.setItem("token", this.token.token)
      console.log(localStorage.getItem("token"))
      //редирект куда-то
    })

  }

}
