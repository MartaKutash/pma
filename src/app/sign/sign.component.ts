import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ResponseObj, RegisterUser } from "../services/interfaces";
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
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
    let user = {
      login: this.form.get('login_1').value,
      name: this.form.get('login_name').value,
      password: this.form.get('password_1').value,
    }

    this.auth.register(user).subscribe(data => {
      localStorage.setItem("current_user_id", data._id)
      let user2 = {
        login: user.login,
        password: user.password
      }
      console.log(user2)
      this.auth.login(user2).subscribe(data => {
        localStorage.setItem("token", data.token)
        this.router.navigate(['/listing'])
      })
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

