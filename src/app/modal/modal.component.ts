import { Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {Route, Router} from '@angular/router';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalComponent>, private router: Router) {}
  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }
  wantLogout() {
    localStorage.removeItem("current_user_id")
    localStorage.removeItem("token")
    this.router.navigate(['/main'])
    this.dialogRef.close();
  }
}
