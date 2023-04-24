import { Component,
  OnInit,
  ViewContainerRef,
  QueryList,
  ViewChild,
  ViewChildren,
  Input,
  Host,
  Inject, } from '@angular/core';
import {Route, Router} from '@angular/router';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ColumnFormComponent } from '../column-form/column-form.component';


@Component({
  selector: 'app-column-modal',
  templateUrl: './column-modal.component.html',
  styleUrls: ['./column-modal.component.css']
})
export class ColumnModalComponent implements OnInit {
  form: any = FormGroup;
ngOnInit(): void {

}
constructor(
  private formBuilder: FormBuilder,
  private router: Router,
  public dialogRef: MatDialogRef<ColumnModalComponent>,
  public viewContainerRef: ViewContainerRef
  ) {}

exit() {
  this.router.navigate(['/board'])
  this.dialogRef.close();
 }

 createColumn() {
  this.dialogRef.close()
  this.createColumn()
 }

}
