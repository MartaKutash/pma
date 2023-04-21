import {
  Component,
  OnInit,
  ViewContainerRef,
  QueryList,
  ViewChild,
  ViewChildren,
  Input,
  Host,
  Inject,
} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Route, Router} from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { ListingpageComponent } from '../listingpage/listingpage.component';
import {Board} from "../services/interfaces";
import {BoardComponent} from "../board/board.component";
import {BoardService} from "../services/board.service";
import {AdDirective} from "../board/ad.directive";

@Component({
  selector: 'app-modal-board',
  templateUrl: './modal-board.component.html',
  styleUrls: ['./modal-board.component.css']
})
export class ModalBoardComponent implements OnInit {

  form: any = FormGroup;
  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;
  bodyText: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public dialogRef: MatDialogRef<ModalBoardComponent>,
    public viewContainerRef: ViewContainerRef
    ) {}

  ngOnInit() {
    this.form = this.formBuilder.group( {
      boardname: '',
    });
    this.bodyText = 'This text can be updated in modal 1';
  }


  createBoard() {
    this.dialogRef.close({title: this.form.get('boardname').value})
  }


 exit() {
  this.router.navigate(['/listing'])
  this.dialogRef.close();
 }

}
