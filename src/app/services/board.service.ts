import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Board, RegisterUser, ResponseObj, Token, User} from "./interfaces";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class BoardService {

  baseUrl:String = 'https://final-task-backend-production-6419.up.railway.app';
  constructor(private http: HttpClient, private authService: AuthService) {}

  createBoard(board: Board): Observable<Board> {
    return this.http.post<Board>(this.baseUrl + '/boards', board, this.authService.getAuthHeader())
  }

  getBoardsByUserId(user_id: String): Observable<Board[]> {
    const token = localStorage.getItem("token")
    return this.http.get<Board[]>(this.baseUrl + '/boardsSet/' + user_id, this.authService.getAuthHeader())
  }
}