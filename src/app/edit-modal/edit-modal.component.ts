import { Component, OnInit, ViewChild, ViewChildren, ViewContainerRef, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Route, Router} from '@angular/router';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ModalActionsService } from '../services/modal-actions.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  form: any = FormGroup;
  ngOnInit(): void {

  }
  constructor(private formBuilder: FormBuilder,
    private router: Router, public dialogRef: MatDialogRef<EditModalComponent>, @Inject(MAT_DIALOG_DATA) private modalData: any,private modalService: ModalActionsService) {}

    actionFunction() {
      this.dialogRef.close({title: this.form.get('boardname').value})
      this.modalService.modalAction(this.modalData);
    this.closeModal();
    }
    closeModal() {
      this.router.navigate(['/listing'])
      this.dialogRef.close();
    }

}
