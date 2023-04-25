import { Component, Inject, OnInit } from '@angular/core';
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
  column: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    public dialogRef: MatDialogRef<EditColumnModalComponent>,
    private columnService: ColumnService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

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
    this.columnService.getColumnById(this.data.board_id, this.data.id).subscribe((data: any) => {
      console.log(data)
      var edited = data
      edited.title = title
      edited._id = undefined
      edited.boardId = undefined
      this.columnService.editColumn(this.data.board_id, this.data.id, edited).subscribe(data => {
        console.log(data)
        this.data.column.editColumn(data)
      })
    })
  }
}
