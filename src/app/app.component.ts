import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pma';
  public showContainer: boolean | undefined;
  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 320px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showContainer = true;
        } else {
          this.showContainer = false;
        }
      });
  }
}


