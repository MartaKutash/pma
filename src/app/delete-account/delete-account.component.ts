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
    this.form = this.formBuilder.group( {
      login_1: this.formBuilder.control('',Validators.required),
      password_1: this.formBuilder.control('', Validators.compose([Validators.required, Validators.minLength(8)])),
      password_confirmation: '',
      login_name:this.formBuilder.control('', Validators.compose([Validators.required, Validators.minLength(2)]))
    });
  }

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router:Router) {

  }
  obj: ResponseObj | undefined;
  register() {
    console.log('register');
    let user = {
      login: this.form.get('login_1').value,
      name: this.form.get('login_name').value,
      password: this.form.get('password_1').value,
    }

    console.log(user)
    console.log('login')
    console.log(this.form.value)

    this.auth.register(user).subscribe(data => {
      this.obj = data
      console.log(data)
      console.log(this.obj)
      localStorage.setItem("obj", this.form.value)
      console.log(localStorage.getItem("obj"))
      this.router.navigate(['/listing'])
      //редирект куда-то
    })

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
