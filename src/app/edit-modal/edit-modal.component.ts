import { Component, OnInit, ViewChild, ViewChildren, ViewContainerRef, Inject} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {Route, Router} from '@angular/router';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  form: any = FormGroup;
  ngOnInit(): void {

  }
  constructor(private formBuilder: FormBuilder,
    private router: Router, public dialogRef: MatDialogRef<EditModalComponent>) {}

    Ok() {
      /*this.editBoard(title)*/
      alert("Changed")
    }

    exit() {
      this.router.navigate(['/listing'])
      this.dialogRef.close();
    }
}
