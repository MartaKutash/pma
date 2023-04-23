import {Component, Input, Output, EventEmitter} from '@angular/core';
import { ListingpageComponent } from '../listingpage/listingpage.component';
import {BoardService} from "../services/board.service";
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  @Input() name!: String;
  @Input() id!: String;
  @Output() newItemEvent = new EventEmitter<string>();

  delete() {
    console.log(this.name)
    console.log(this.id)
    this.boardService.deleteBoard(this.id).subscribe( data => {
      console.log(data)
      this.listing.deleteBoard(this.id.toString())
    })}



  /*editBoard () {
    console.log(this.name)
    console.log(this.id)
    this.boardService.editBoard(this.id).subscribe( data => {
      console.log(data)
      this.listing.editBoard(this.id.toString())
    })*/




  constructor(private boardService: BoardService,
    private listing: ListingpageComponent, public matDialog: MatDialog) {}


    openModal2() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.id = "modal-component";
      dialogConfig.height = "350px";
      dialogConfig.width = "600px";
      const modalDialog = this.matDialog.open(EditModalComponent, dialogConfig);
      /*this.editBoard(title)*/
    }

}

