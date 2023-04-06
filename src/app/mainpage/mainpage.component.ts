import { Component } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  signUp () {
    alert("You have been signed up")
  }

  logIn () {
    alert("Welcome to pma!")
  }
}
