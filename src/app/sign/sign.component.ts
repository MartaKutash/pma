import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Token, RegisterUser } from "../services/interfaces";



@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  form: any = FormGroup;


  ngOnInit() {
    this.form = this.formBuilder.group( {
      login: this.formBuilder.control('',Validators.required),
      password: this.formBuilder.control('', Validators.compose([Validators.required, Validators.minLength(8)])),
      password_confirmation: '',
      login_name:this.formBuilder.control('', Validators.compose([Validators.required, Validators.minLength(2)]))
    });
  }

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {

  }
  token: Token | undefined;
  register() {
    console.log('register');
    let user = {
      login: this.form.get('login').value,
      login_name: this.form.get('login_name').value,
      password: this.form.get('password').value,
      password_confirmation: this.form.get('password_confirmation').value
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

