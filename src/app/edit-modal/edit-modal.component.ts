import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BoardService} from "../services/board.service";

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  form: any = FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private boardService: BoardService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<EditModalComponent>) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      boardname: '',
    });
  }

  Ok() {
    this.editBoard(this.form.get('boardname').value)
    //alert("Changed")
    this.exit()
  }

  exit() {
    this.router.navigate(['/listing'])
    this.dialogRef.close();
  }

  editBoard(title: string) {
    this.boardService.getBoardById(this.data.id).subscribe(data => {
      console.log(data)
      var edited = data
      edited.title = title
      edited._id = undefined
      this.boardService.editBoard(this.data.id, edited).subscribe(data => {
        console.log(data)
        this.data.listing.editBoard(data)
      })
    })
  }
}
