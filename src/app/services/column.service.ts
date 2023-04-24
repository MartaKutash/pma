import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Board, RegisterUser, ResponseObj, Token, User, Column} from "./interfaces";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class ColumnService {

  baseUrl:String = 'https://final-task-backend-production-6419.up.railway.app';
  constructor(private http: HttpClient, private authService: AuthService) {}

  createColumn(column: Column, board_id: String): Observable<Column> {
    const URL = this.baseUrl + '/boards/' + board_id + '/columns'
    return this.http.post<Column>(URL, column, this.authService.getAuthHeader())
  }

  getColumnById(board_id: String, column_id: String): Observable<Column> {
    return this.http.get<Column>(this.baseUrl + '/boards/' + board_id + '/columns/' + column_id,  this.authService.getAuthHeader())
  }

  getColumnsByBoardId(board_id: String): Observable<Column[]> {
    return this.http.get<Column[]>(this.baseUrl + '/boards/' + board_id + '/columns/', this.authService.getAuthHeader())
  }

  /*deleteBoard(board_id: String): Observable<Board> {
    return this.http.delete<Board>(this.baseUrl + '/boards/' + board_id, this.authService.getAuthHeader())
  }*/

  editColumn(board_id: String, column_id: String): Observable<Column> {
    return this.http.put<Column>(this.baseUrl + '/boards/' + board_id + '/columns/' + column_id, this.authService.getAuthHeader())
  }
}
