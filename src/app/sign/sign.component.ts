import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ResponseObj, RegisterUser } from "../services/interfaces";



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
  obj: ResponseObj | undefined;
  register() {
    console.log('register');
    let user = {
      login: this.form.get('login_1').value,
      name: this.form.get('login_name').value,
      password: this.form.get('password_1').value,
    }

    console.log(user)
    console.log(this.form.value)

    this.auth.register(user).subscribe(data => {
      this.obj = data
      console.log(data)
      console.log(this.obj)
      localStorage.setItem("obj", this.form.value)
      console.log(localStorage.getItem("obj"))
      //редирект куда-то
    })

  }

  }

