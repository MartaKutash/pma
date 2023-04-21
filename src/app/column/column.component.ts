import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(private router: Router, public matDialog: MatDialog) {
}

dialogConfig = new MatDialogConfig();
  modalDialog: MatDialogRef<ModalComponent, any> | undefined;
  ngAfterViewInit(): void {
    document.onclick = (args: any) : void => {
          if(args.target.tagName === 'BODY') {
            console.log("modal close")
            this.modalDialog?.close()
          }
      }
  }
openModal() {
  this.dialogConfig.id = "projects-modal-component";
  this.dialogConfig.height = "600px";
  this.dialogConfig.width = "550px";
  this.modalDialog = this.matDialog.open(ModalComponent, this.dialogConfig);
  this.modalDialog.afterClosed().subscribe(evet => console.log(evet))
}

openModal1() {
  
}

}
