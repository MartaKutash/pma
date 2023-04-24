import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColumnComponent } from '../column/column.component';
import {ColumnService} from "../services/column.service";
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ColumnModalComponent } from '../column-modal/column-modal.component';

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

}
