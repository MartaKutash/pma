import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingpageComponent } from './listingpage/listingpage.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignComponent } from './sign/sign.component';


const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'listing', component: ListingpageComponent},
  {path: 'sign', component: SignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
