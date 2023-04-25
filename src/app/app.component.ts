import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "pma";
  constructor(public breakpointObserver: BreakpointObserver) {}
  ngOnInit() {
   this.breakpointObserver
      .observe([Breakpoints.TabletPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport is TabletPortrait!');
        }
      });
  }


  }



