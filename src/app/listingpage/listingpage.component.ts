import {Component, Directive, Input, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef} from '@angular/core';
import {Route, Router} from '@angular/router';
import {FormControl, FormGroup, FormArray, FormBuilder} from '@angular/forms';
import {BoardComponent} from "../board/board.component";
import {AdDirective} from "../board/ad.directive";
import {Board, ResponseObj} from "../services/interfaces";
import {BoardService} from "../services/board.service";
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { style } from '@angular/animations';
import { ModalBoardComponent } from '../modal-board/modal-board.component';
import {BoardWithIndex} from "../services/interfaces";

@Component({
  selector: 'app-listingpage',
  templateUrl: './listingpage.component.html',
  styleUrls: ['./listingpage.component.css']
})
export class ListingpageComponent implements OnInit {

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;
  boards: BoardWithIndex[] = []
  bodyText: string | undefined;
  dataFromChild: string | undefined;

  ngOnInit(): void {
    const userId = localStorage.getItem("current_user_id") || ''
    this.boardService.getBoardsByUserId(userId).subscribe(data => {
      this.boards = data.map((it, index) => {
          return {index: index, board: it}
      })
      this.boards.forEach(board => this.renderBoard(board))
    })
  }

  renderBoard(board: BoardWithIndex) {

    const options = {
      index: board.index
    }
    const componentRef = this.adHost.viewContainerRef.createComponent<BoardComponent>(BoardComponent, options);
    componentRef.instance.name = board.board.title;
    componentRef.instance.id = board.board._id || '';
  }

  createBoard(title: string) {
    const userId = localStorage.getItem("current_user_id") || ''
    const board: Board = {
      title: title,
      owner: userId,
      users: []
    }

    this.boardService.createBoard(board).subscribe(data => {
      const curr_index = this.boards.at(-1)!.index;
      const next_index = curr_index + 1;
      console.log(this.boards.at(-1))
      console.log('next_index ' + next_index)
      console.log(this.boards)
      this.renderBoard({index: next_index, board: data})
      this.boards.push({index: next_index, board: data})
      console.log(this.boards)
    })
  }

  deleteBoard(id: string) {
    console.log(id)
    const board = this.boards.find(b => b.board._id == id) || {index: -1, board: {}}
    console.log(board)
    console.log(this.adHost.viewContainerRef.get(board.index))
    console.log(this.adHost.viewContainerRef.length)
    this.adHost.viewContainerRef.remove(board.index)
    console.log(this.adHost.viewContainerRef.length)

    console.log(this.boards)
    this.boards.forEach((value,index)=> {
      if(value.index == board.index) this.boards.splice(index,1);
    });
    console.log(this.boards)
  }

  constructor(private router: Router,
              private boardService: BoardService, public matDialog: MatDialog) {
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
  modalDialog1: MatDialogRef<ModalBoardComponent, any> | undefined;
  ngAfterViewInit1(): void {
    document.onclick = (args: any) : void => {
          if(args.target.tagName === 'BODY') {
              this.modalDialog1?.close()
          }
      }
  }
  openModal1() {
    this.dialogConfig1.id = "projects-modal-component1";
    this.dialogConfig1.height = "500px";
    this.dialogConfig1.width = "650px";
    this.modalDialog1 = this.matDialog.open(ModalBoardComponent, this.dialogConfig1);
    this.modalDialog1.afterClosed().subscribe(data => {
      const title = data.title
      this.createBoard(title)
    })
  }

}





