import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ColumnService} from "../services/column.service";

@Component({
  selector: 'app-edit-column-modal',
  templateUrl: './edit-column-modal.component.html',
  styleUrls: ['./edit-column-modal.component.css']
})
export class EditColumnModalComponent {
  form: any = FormGroup;
  data: any;
  column: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    public dialogRef: MatDialogRef<EditColumnModalComponent>,
    private columnService: ColumnService,) {}

    ngOnInit() {
      this.form = this.formBuilder.group({
        columnname: '',
      });
    }

  Ok() {
    this.editColumn(this.form.get('columnname').value)
    this.dialogRef.close();

  }

  exit() {
    this.router.navigate(['board/:id'])
    this.dialogRef.close();

  }

  editColumn(title: string) {
    this.columnService.getColumnById(this.boardId, this.edited._id).subscribe((data: any) => {
      console.log(data)
      var edited = data
      edited.title = title
      edited._id = undefined
      this.columnService.editColumn(this.data.id, edited).subscribe(data => {
        console.log(data)
        this.data.column.editColumn(data)
      })
    })
  }
}
