import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingpageComponent } from './listingpage/listingpage.component';
import { FormsModule } from '@angular/forms';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';


@NgModule({
  declarations: [
    AppComponent,
    ListingpageComponent,
    MainpageComponent,
    LoginComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmIwOGVhYmE2NTE0Y2M4MDk2NjE4OCIsImxvZ2luIjoibWFydGhhIiwiaWF0IjoxNjgwNTQyMDEzLCJleHAiOjE2ODA1ODUyMTN9.JlTSN3s-aL-p_F-Qm_lX30tl4zSfKoLhivbGu2pw_3Y'
}
