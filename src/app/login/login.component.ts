import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms'
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {ResponseObj, Token, User} from "../services/interfaces";
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      login_form: this.formBuilder.control('', Validators.required),
      password_form: this.formBuilder.control('', Validators.compose([Validators.required, Validators.minLength(8)])),
    });
  }

  login() {

    const login = this.form.get('login_form').value
    let user = {
      login: login,
      password: this.form.get('password_form').value
    }
    this.auth.login(user).subscribe(data => {
      let token = data.token
      localStorage.setItem("token", token)
      this.auth.getUsers().subscribe(data => {
        let current_user = data.find((user) => user.login === login)
        console.log(current_user)
        let current_user_id = current_user ? current_user._id : ''
        localStorage.setItem("current_user_id", current_user_id)
        this.router.navigate(['/listing'])
      })
    })

  }

}
