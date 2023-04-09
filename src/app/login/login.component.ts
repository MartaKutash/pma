import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {Token, User} from "../services/interfaces";
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = FormGroup;

constructor(private formBuilder: FormBuilder, private auth: AuthService, private router:Router) {

}

ngOnInit() {
  this.form = this.formBuilder.group( {
    login_form: this.formBuilder.control('',Validators.required),
    password_form: this.formBuilder.control('', Validators.compose([Validators.required, Validators.minLength(8)])),
  });
}

token: Token | undefined;
  login() {
    console.log('login');
    let user = {
      login: this.form.get('login_form').value,
      password: this.form.get('password_form').value
    }

    console.log(user)
    console.log(this.form.value)

    this.auth.login(user).subscribe(data => {
      this.token = data
      console.log(data)
      console.log(this.token)
      localStorage.setItem("token", this.token.token)
      console.log(localStorage.getItem("token"))
      this.router.navigate(['/listing'])
    })

  }

}
