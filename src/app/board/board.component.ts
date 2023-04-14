import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { BoardService } from '../services/board.service';
import { fromEvent, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  constructor(private router:Router, public boardService: BoardService) {
}

logout() {
  if (confirm("Do you really want to logout?") == true)
  this.router.navigate(['/main'])
  else {
    this.router.navigate(['/listing'])
  }
}
sub!: Subscription;
focusedElement: any;
data$: any;
data: any

column: any;
  item: any;
  ngOnInit(): void {
    this.data$ = this.boardService.getBoard$().subscribe((data) => {
      console.log(data)
      this.data = data
    })

    this.sub = fromEvent(window, 'keydown')
    .pipe(
      tap((e: any) => {
        let leftArrow = 37
        let rightArrow = 39
        let indexOfSelectedCoulumn = this.data.indexOf(this.column)

        if(e.keyCode === leftArrow) {
          if(indexOfSelectedCoulumn <= 0) {
            console.log('Can not move left')
            return
          } else {
            const updatedColumn = this.data[indexOfSelectedCoulumn].list.filter((item: { id: any; }) => item.id !== this.item.id)
            this.data[indexOfSelectedCoulumn].list = updatedColumn

            const nextColumn = this.data[indexOfSelectedCoulumn - 1]
            nextColumn.list = [...nextColumn.list, this.item]

            this.column = nextColumn
          }
        }

        if(e.keyCode === rightArrow) {
          if(indexOfSelectedCoulumn >= this.data.length - 1) {
            console.log('Can not move right')
            return
          } else {
            const updatedColumn = this.data[indexOfSelectedCoulumn].list.filter((item: { id: any; }) => item.id !== this.item.id)
            this.data[indexOfSelectedCoulumn].list = updatedColumn

            const nextColumn = this.data[indexOfSelectedCoulumn + 1]
            nextColumn.list = [...nextColumn.list, this.item]

            this.column = nextColumn
          }
        }
      })
    )
    .subscribe();
  }

  onFocusEl(column: any, item: any) {
    this.column = column
    this.item = item
    console.log(item)
  }

  onColorChange(color: string, columnId: number) {
    this.boardService.changeColumnColor(color, columnId);
  }

  onAddCard(text: string, columnId: number) {
    if (text) {
      this.boardService.addCard(text, columnId);
    }
  }

  onDeleteColumn(columnId: number) {
    this.boardService.deleteColumn(columnId);
  }

  onDeleteCard(cardId: number, columnId: number) {
    this.boardService.deleteCard(cardId, columnId);
  }

  onChangeLike(event: { card: any; increase: boolean }, columnId: number) {
    const {
      card: { id },
      increase,
    } = event;
    this.boardService.changeLike(id, columnId, increase);
  }

  onAddComment(event: { id: number; text: string }, columnId: number) {
    this.boardService.addComment(columnId, event.id, event.text);
  }

  onDeleteComment(comment: { id: any; }, columnId: any, item: { id: any; }) {
    this.boardService.deleteComment(columnId, item.id, comment.id);
  }

  onFocus(e: any) {
    // this.focusedElement = e.target;
    // this.sub = fromEvent(this.focusedElement, 'keydown')
    //   .pipe(
    //     filter((event: any) => {
    //       return !event.repeat && event.key === 'Control';
    //     }),
    //     tap((e) => {
    //       const event = new MouseEvent('mousedown');
    //       e.target.dispatchEvent(event)
    //     })

    //   )
    //   .subscribe();
  }

  onClick(e: any) {
    // this.focusedElement = e.currentTarget;
    // console.log(e.currentTarget.getBoundingClientRect())
    // this.sub = fromEvent(this.focusedElement, 'keydown')
    //   .pipe(
    //     filter((event: any) => {
    //       return !event.repeat && event.key === 'Control';
    //     }),
    //     tap((e) => {
    //       const event = new MouseEvent('mousedown');
    //       e.currentTarget.dispatchEvent(event)
    //       e.screenX = 0
    //       e.screenY = 0
    //     })

    //   )
    //   .subscribe();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}



