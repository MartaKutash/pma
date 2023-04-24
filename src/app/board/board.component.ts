import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ListingpageComponent} from '../listingpage/listingpage.component';
import {BoardService} from "../services/board.service";
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {EditModalComponent} from '../edit-modal/edit-modal.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {ConfirmationModalComponent} from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  [x: string]: any;

  @Input() name!: String;
  @Input() id!: String;
  @Output() newItemEvent = new EventEmitter<string>();
  MatDialogConfig: any;
  modalDialog: any;

  constructor(private boardService: BoardService,
              private listing: ListingpageComponent, public matDialog: MatDialog) {
  }

  openModal2() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = {
      id: this.id,
      listing: this.listing
    }
    const modalDialog = this.matDialog.open(EditModalComponent, dialogConfig);
  }

  openConfirmModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = {
      id: this.id,
      listing: this.listing
    }
    const modalDialog = this.matDialog.open(ConfirmationModalComponent, dialogConfig);
  }

}

