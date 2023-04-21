import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RegisterUser, User, ResponseObj } from "./interfaces";
import {Token} from "../services/interfaces"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl:String = 'https://final-task-backend-production-6419.up.railway.app';
  private currentUser!: ResponseObj
  constructor(private http: HttpClient) {}

  getCurrentUser() {
    return this.currentUser
  }

  getAuthHeader() {
    const token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({'Authorization': `Bearer ${token}`})
    }
    return options;
  }

  login(user: User): Observable<Token>{
    return this.http.post<Token>(this.baseUrl + '/auth/signin', user)
  }

  register(user: RegisterUser): Observable<ResponseObj> {
    return this.http.post<ResponseObj>(this.baseUrl + '/auth/signup', user)
  }

  getUsers(): Observable<ResponseObj[]> {
    return this.http.get<ResponseObj[]>(this.baseUrl + '/users', this.getAuthHeader())
  }
}
