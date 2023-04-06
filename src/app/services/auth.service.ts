import { HttpClient } from "@angular/common/http";
import { Token } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }


  login(user: User): Observable<any> {
    return this.http.post('https://final-task-backend-production-6419.up.railway.app/', user)

  }

  register() {}
}
