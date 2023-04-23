
import { Component, EventEmitter, Injectable, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { config } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import {Route, Router} from '@angular/router';
import { BoardComponent } from '../board/board.component';
import {BoardService} from "../services/board.service";


@Component({
  selector: 'confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css'],
  providers: []
})

@Injectable()
export class ConfirmationModalComponent implements OnInit {



  constructor(public dialogRef: MatDialogRef<ConfirmationModalComponent>, private router: Router) {

  }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();

  }

  deleteBoard() {

  }

}
