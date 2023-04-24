import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColumnComponent } from '../column/column.component';
import {ColumnService} from "../services/column.service";
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ColumnModalComponent } from '../column-modal/column-modal.component';
import { EditColumnModalComponent } from '../edit-column-modal/edit-column-modal.component';

@Component({
  selector: 'app-column-form',
  templateUrl: './column-form.component.html',
  styleUrls: ['./column-form.component.css']
})
export class ColumnFormComponent implements OnInit {
  @Input() name!: String;
  @Input() id!: String;
  @Output() newItemEvent = new EventEmitter<string>();
  MatDialogConfig: any;
  modalDialog: any;

  ngOnInit() {

  }

  constructor(private columnService: ColumnService,
    private columnComponent: ColumnComponent, public matDialog: MatDialog) {
}

openModal() {
  const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "500px";
    dialogConfig.data = {
      id: this.id,
      listing: this.columnComponent
    }
    const modalDialog = this.matDialog.open(EditColumnModalComponent, dialogConfig);

}

openModal2() {

}

}
