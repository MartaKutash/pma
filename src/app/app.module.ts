import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule} from '@angular/cdk/drag-drop';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingpageComponent } from './listingpage/listingpage.component';
import { FormsModule } from '@angular/forms';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { BoardComponent } from './board/board.component';
import {AdDirective} from "./board/ad.directive";
import { ModalComponent } from './modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalBoardComponent } from './modal-board/modal-board.component';
import { ColumnComponent } from './column/column.component';
import { ColumnFormComponent } from './column-form/column-form.component';
import { ColumnModalComponent } from './column-modal/column-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ListingpageComponent,
    MainpageComponent,
    LoginComponent,
    SignComponent,
    DeleteAccountComponent,
    BoardComponent,
    AdDirective,
    ModalComponent,
    ModalBoardComponent,
    ColumnComponent,
    ColumnFormComponent,
    ColumnModalComponent,
    EditModalComponent,
    ConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    LayoutModule,
    DragDropModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent, ModalBoardComponent, EditModalComponent]
})
export class AppModule {


}
