import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Route, Router} from '@angular/router';
import {ColumnService} from "../services/column.service";

@Component({
  selector: 'app-delete-column-modal',
  templateUrl: './delete-column-modal.component.html',
  styleUrls: ['./delete-column-modal.component.css']
})
export class DeleteColumnModalComponent implements OnInit {
  constructor(private router: Router,
    private columnService: ColumnService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DeleteColumnModalComponent>) {}
ngOnInit(): void {

}

  closeModal() {
    this.dialogRef.close()

  }
  deleteColumn() {
    this.columnService.deleteColumn(this.data.board_id, this.data.id).subscribe(data => {
      console.log(data)
      this.data.column.deleteColumn(this.data.id)
    })
    this.dialogRef.close();

  }
}
