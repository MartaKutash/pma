import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

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

  constructor(private formBuilder: FormBuilder, auth: AuthService) {

  }
  register() {
    console.log('register');
    console.log(this.form.get('login').value);


  }

}
