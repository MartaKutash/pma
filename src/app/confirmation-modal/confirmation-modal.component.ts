import {
  Component,
  EventEmitter,
  Inject,
  Injectable,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {config} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Route, Router} from '@angular/router';
import {BoardComponent} from '../board/board.component';
import {BoardService} from "../services/board.service";


@Component({
  selector: 'confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css'],
  providers: []
})

@Injectable()
export class ConfirmationModalComponent implements OnInit {


  constructor(private router: Router,
              private boardService: BoardService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<ConfirmationModalComponent>) {

  }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

  deleteBoard() {
    this.boardService.deleteBoard(this.data.id).subscribe(data => {
      console.log(data)
      this.data.listing.deleteBoard(this.data.id)
    })
    this.dialogRef.close();
  }

}
