import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-listingpage',
  templateUrl: './listingpage.component.html',
  styleUrls: ['./listingpage.component.css']
})
export class ListingpageComponent implements OnInit {

ngOnInit(): void {

}

createboard() {


}
  constructor(private router:Router) {
    }


  logout() {
    if (confirm("Do you really want to logout?") == true)
    this.router.navigate(['/main'])
    else {
      this.router.navigate(['/listing'])
    }
  }

}

