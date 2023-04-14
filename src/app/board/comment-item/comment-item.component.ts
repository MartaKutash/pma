import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {
  @Input() comment: any;
  constructor() {}
  @Output() emitComment: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }
  onCommentEmit(comment: Comment) {
    this.emitComment.emit(comment);
  }

}
