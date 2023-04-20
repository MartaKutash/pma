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



@Component({
  selector: 'app-listingpage',
  templateUrl: './listingpage.component.html',
  styleUrls: ['./listingpage.component.css']
})
export class ListingpageComponent implements OnInit {

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;
  boards: Board[] = []
  bodyText: string | undefined;

  ngOnInit(): void {
    /*const userId = localStorage.getItem("current_user_id") || ''
    this.boardService.getBoardsByUserId(userId).subscribe(data => {
        this.boards = data
        this.boards.forEach(board => this.renderBoard(board))
      })

      this.bodyText = 'This text can be updated in modal 1';
  }


  renderBoard(board: Board) {
    console.log(this.adHost)
    const componentRef = this.adHost.viewContainerRef.createComponent<BoardComponent>(BoardComponent);
    componentRef.instance.name = board.title;
  }

  createBoard() {
    const userId = localStorage.getItem("current_user_id") || ''
    const board: Board = {
      title: "hardcoded title",
      owner: userId,
      users: []
    }

    this.boardService.createBoard(board).subscribe(data => {
      this.renderBoard(data)
      this.boards.push(data)
    })*/
  }

  constructor(private router: Router,
              private boardService: BoardService, public matDialog: MatDialog) {
  }
  dialogConfig = new MatDialogConfig();
  modalDialog: MatDialogRef<ModalComponent, any> | undefined;
  ngAfterViewInit(): void {
    document.onclick = (args: any) : void => {
          if(args.target.tagName === 'BODY') {
              this.modalDialog?.close()
          }
      }
  }
  openModal() {

    this.dialogConfig.id = "projects-modal-component";
    this.dialogConfig.height = "600px";
    this.dialogConfig.width = "550px";
    this.modalDialog = this.matDialog.open(ModalComponent, this.dialogConfig);
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
  }

  }





