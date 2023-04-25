import { Component, OnInit, ViewChild } from '@angular/core';
import {Route, Router} from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ColumnModalComponent } from '../column-modal/column-modal.component';
import {Column} from "../services/interfaces";
import {AdDirective} from "../board/ad.directive";
import {ColumnService} from "../services/column.service";
import { ColumnFormComponent } from '../column-form/column-form.component';
import { Title } from '@angular/platform-browser';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;
  columns: Column[] = []
  boardId!: string
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.boardId = params['id']
      this.columnService.getColumnsByBoardId(this.boardId).subscribe(data => {
        this.columns = data.sort((a, b) => a.order - b.order);
        console.log(this.columns)
        this.columns.forEach((column, index) => {
          this.renderColumn(index, column)
        })
      })
    })
  }

  constructor(private router: Router,
     public matDialog: MatDialog,
     private columnService: ColumnService,
     private route: ActivatedRoute) {
}

createColumn(title: string) {

  const column: Column = {
    title: title,
    order: this.columns.length
  }
  this.columnService.createColumn(column, this.boardId).subscribe(data => {
    const next_index = this.columns.length
    this.renderColumn(next_index, data)
    this.columns.push(data)
  })
}

renderColumn(index: number, column: Column) {
  const options = {
    index: index
  }
  const componentRef = this.adHost.viewContainerRef.createComponent<ColumnFormComponent>(ColumnFormComponent, options);
  componentRef.instance.name = column.title;
  componentRef.instance.id = column._id || '';
  componentRef.instance.board_id = this.boardId;
}

editColumn(column: Column) {
  const index = this.columns.findIndex(b => b._id == column._id)
  this.adHost.viewContainerRef.remove(index)
  this.columns[index] = column
  this.renderColumn(index, column)
}

deleteColumn(id: string) {
  const index = this.columns.findIndex(b => b._id == id)
  this.adHost.viewContainerRef.remove(index)
  this.columns.splice(index,1);
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

dialogConfig1 = new MatDialogConfig();
  modalDialog1: MatDialogRef<ColumnModalComponent, any> | undefined;
  ngAfterViewInit1(): void {
    document.onclick = (args: any) : void => {
          if(args.target.tagName === 'BODY') {
            console.log("modal close")
            this.modalDialog1?.close()
          }
      }
  }

openModal1() {
  this.dialogConfig1.id = "projects-modal-component1";
  this.dialogConfig1.height = "300px";
  this.dialogConfig1.width = "400px";
  this.modalDialog1 = this.matDialog.open(ColumnModalComponent, this.dialogConfig1);
  this.modalDialog1.afterClosed().subscribe(data => {
    const title = data.title
    this.createColumn(title)
  })

}

}
