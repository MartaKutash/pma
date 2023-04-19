import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { ListingpageComponent } from './listingpage/listingpage.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ModalComponent } from './modal/modal.component';
import { SignComponent } from './sign/sign.component';


const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'listing', component: ListingpageComponent},
  {path: 'sign', component: SignComponent},
  {path: 'delete', component: DeleteAccountComponent},
  {path: 'board', component: BoardComponent},
  {path: 'modal', component: ModalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
