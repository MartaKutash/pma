import {Component, Input, Output, EventEmitter} from '@angular/core';
import { ListingpageComponent } from '../listingpage/listingpage.component';
import {BoardService} from "../services/board.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  @Input() name!: String;
  @Input() id!: String;
  @Output() newItemEvent = new EventEmitter<string>();

  delete() {
    console.log(this.name)
    console.log(this.id)
    this.boardService.deleteBoard(this.id).subscribe( data => {
      console.log(data)
      this.listing.deleteBoard(this.id.toString())
    })

  }
  constructor(private boardService: BoardService,
    private listing: ListingpageComponent) {}
}
