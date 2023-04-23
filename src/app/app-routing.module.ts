import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { ColumnFormComponent } from './column-form/column-form.component';
import { ColumnComponent } from './column/column.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { ListingpageComponent } from './listingpage/listingpage.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ModalBoardComponent } from './modal-board/modal-board.component';
import { ModalComponent } from './modal/modal.component';
import { SignComponent } from './sign/sign.component';
import { ColumnModalComponent } from './column-modal/column-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';


const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'listing', component: ListingpageComponent},
  {path: 'sign', component: SignComponent},
  {path: 'delete', component: DeleteAccountComponent},
  {path: 'modal', component: ModalComponent},
  {path: 'modal-board', component: ModalBoardComponent},
  {path: 'board', component: ColumnComponent},
  {path: 'column-form', component: ColumnFormComponent},
  {path: 'column-modal', component: ColumnModalComponent},
  {path: 'edit-modal', component: EditModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
