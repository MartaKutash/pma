import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ResponseObj, RegisterUser } from "../services/interfaces";
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {
  form: any = FormGroup;
  ngOnInit() {
    const userId = localStorage.getItem("current_user_id") || ''
    this.auth.getUserById(userId).subscribe(data => {
      const name = data.name
      const login = data.login
      this.form = this.formBuilder.group( {
        login_1: this.formBuilder.control('', Validators.required),
        password_1: this.formBuilder.control('', Validators.compose([Validators.required, Validators.minLength(8)])),
        password_confirmation: '',
        login_name:this.formBuilder.control('', Validators.compose([Validators.required, Validators.minLength(2)]))
      });
      this.form.setValue({
        login_1: login,
        login_name: name
      });
    })

  }

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router:Router) {

  }
  obj: ResponseObj | undefined;
  edit() {
    const userId = localStorage.getItem("current_user_id") || ''
    /*this.auth.getUserById(userId).subscribe(data => {
      const name = data.name
      const login = data.login
    })*/

    let user: RegisterUser  = {
      login: this.form.get('login_1').value,
      name: this.form.get('login_name').value,
      password: this.form.get('password_1').value,
    }
    this.auth.editUser(userId, user).subscribe(data => {
      console.log(data)})
  }
  get password_1() {
    return this.form.get('password_1')
  }

  get login_1() {
    return this.form.get('login_1')
  }

  get login_name() {
    return this.form.get('login_name')
  }

  get password_confirmation() {
    return this.form.get('password_confirmation')
  }
  }
