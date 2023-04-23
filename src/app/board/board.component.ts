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
      dialogConfig.data = {
        name: "logout",
        title: "Are you sure you want to logout?",
        description: "Pretend this is a convincing argument on why you shouldn't logout :)",
        actionButtonText: "Logout",
      }
      const modalDialog = this.matDialog.open(EditModalComponent, dialogConfig);
      /*this.editBoard(title)*/
    }

    openDeleteModal() {
      const productId = "prod01";
      const dialogConfig = new MatDialogConfig();
      // The user can't close the dialog by clicking outside its body
      dialogConfig.disableClose = true;
      dialogConfig.id = "modal-component";
      dialogConfig.height = "350px";
      dialogConfig.width = "600px";
      dialogConfig.data = {
        name: "deleteProduct",
        title: "Are you sure you want to delete this product?",
        description: "If you continue, the product with ID " + productId + " will be deleted.",
        actionButtonText: "Delete",
        productId: productId;
      const modalDialog = this.matDialog.open(EditModalComponent, dialogConfig)

}
    }
  }
