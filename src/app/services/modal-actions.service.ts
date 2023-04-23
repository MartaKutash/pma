import { Injectable } from '@angular/core';
import { MockServ1Service } from './mock-serv-1.service';
import { MockServ2Service } from './mock-serv-2.service';

@Injectable({
  providedIn: 'root'
})
export class ModalActionsService {

  constructor(
    private serv1: MockServ1Service,
    private serv2: MockServ2Service
  ) { }

  modalAction(modalData: any) {
    switch (modalData.name) {
      case "logout":
        this.logout(modalData);
        break;

      case "deleteProduct":
        this.deleteProduct(modalData);
        break;

      default:
        break;
    }
  }


  private logout(modalData: any) {
    this.serv1.alertLogout(modalData);
  }

  private deleteProduct(modalData: any) {
    this.serv2.alertDelete(modalData)
  }
}
