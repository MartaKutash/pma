import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {BoardComponent} from "../board/board.component";
import {AdDirective} from "../board/ad.directive";
import {Board} from "../services/interfaces";
import {BoardService} from "../services/board.service";
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ModalComponent} from '../modal/modal.component';
import {ModalBoardComponent} from '../modal-board/modal-board.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-listingpage',
  templateUrl: './listingpage.component.html',
  styleUrls: ['./listingpage.component.css']
})
export class ListingpageComponent implements OnInit {
  editBoard(id: string) {
    console.log(id)
    const index = this.boards.findIndex(b => b._id == id)
    console.log(index)

    console.log(this.adHost.viewContainerRef.get(index))

    console.log(this.boards)
  }

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;
  boards: Board[] = []
  bodyText: string | undefined;

  ngOnInit(): void {
    const userId = localStorage.getItem("current_user_id") || ''
    this.boardService.getBoardsByUserId(userId).subscribe(data => {
      this.boards = data
      this.boards.forEach((board, index) => {
        this.renderBoard(index, board)
      })
    })
  }

  deleteBoard(id: string) {
    console.log(id)
    const index = this.boards.findIndex(b => b._id == id)
    console.log(index)

    this.adHost.viewContainerRef.remove(index)
    console.log(this.adHost.viewContainerRef.get(index))

    console.log(this.boards)
    this.boards.splice(index,1);
    console.log(this.boards)
  }

  renderBoard(index: number, board: Board) {
    const options = {
      index: index
    }
    console.log("index before creating " + index)
    const componentRef = this.adHost.viewContainerRef.createComponent<BoardComponent>(BoardComponent, options);
    componentRef.instance.name = board.title;
    componentRef.instance.id = board._id || '';
  }

  createBoard(title: string) {
    const userId = localStorage.getItem("current_user_id") || ''
    const board: Board = {
      title: title,
      owner: userId,
      users: []
    }

    this.boardService.createBoard(board).subscribe(data => {
      const next_index = this.boards.length
      console.log(this.boards)
      this.renderBoard(next_index, data)
      this.boards.push(data)
      console.log(this.boards)
    })
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





