import { Component, OnInit, ViewContainerRef, QueryList, ViewChild, ViewChildren, } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {Route, Router} from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { ListingpageComponent } from '../listingpage/listingpage.component';
import {Board} from "../services/interfaces";
import {BoardComponent} from "../board/board.component";
import {BoardService} from "../services/board.service";

@Component({
  selector: 'app-modal-board',
  templateUrl: './modal-board.component.html',
  styleUrls: ['./modal-board.component.css']
})
export class ModalBoardComponent implements OnInit {
  boardService: any;
  boards: any;
  bodyText: string | undefined;
  constructor(
    private formBuilder: FormBuilder, private router: Router, public dialogRef: MatDialogRef<ModalBoardComponent>, public viewContainerRef: ViewContainerRef
  ) {}
  ngOnInit() {
    const userId = localStorage.getItem("current_user_id") || ''
    this.boardService.getBoardsByUserId(userId).subscribe((data: any) => {
        this.boards = data
        this.boards.forEach((board: Board) => this.renderBoard(board))
      })

      this.bodyText = 'This text can be updated in modal 1';

    }
  renderBoard(board: Board) {
    console.log(this.adHost)
    const componentRef = this.adHost.viewContainerRef.createComponent<BoardComponent>(BoardComponent);
    componentRef.instance.name = board.title;
  }
  adHost(adHost: any) {
    throw new Error('Method not implemented.');
  }
  createBoard() {
    const userId = localStorage.getItem("current_user_id") || ''
    const board: Board = {
      title: "hardcoded title",
      owner: userId,
      users: []
    }
    this.boardService.createBoard(board).subscribe((data: Board) => {
      this.renderBoard(data)
      this.boards.push(data)
    })}


 exit() {
  this.router.navigate(['/listing'])
  this.dialogRef.close();

 }
}
