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

@NgModule({
  declarations: [
    AppComponent,
    ListingpageComponent,
    MainpageComponent,
    LoginComponent,
    SignComponent,
    DeleteAccountComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /*token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmIwOGVhYmE2NTE0Y2M4MDk2NjE4OCIsImxvZ2luIjoibWFydGhhIiwiaWF0IjoxNjgwNTQyMDEzLCJleHAiOjE2ODA1ODUyMTN9.JlTSN3s-aL-p_F-Qm_lX30tl4zSfKoLhivbGu2pw_3Y'*/


}
