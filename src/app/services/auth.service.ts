import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RegisterUser, User, ResponseObj } from "./interfaces";
import {Token} from "../services/interfaces"


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }


  login(user: User): Observable<Token> {
    return this.http.post<Token>('https://final-task-backend-production-6419.up.railway.app/auth/signin', user)
  }

  register(user: RegisterUser): Observable<ResponseObj> {
    return this.http.post<ResponseObj>('https://final-task-backend-production-6419.up.railway.app/auth/signup', user)
  }
}
