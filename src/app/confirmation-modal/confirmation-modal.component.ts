
import { Component, EventEmitter, Injectable, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { config } from 'rxjs';


@Component({
  selector: 'confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
  providers: []
})

@Injectable()
export class ConfirmationModalComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }



}
