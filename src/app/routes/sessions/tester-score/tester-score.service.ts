import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TesterScoreService {
  constructor(private _httpClient: HttpClient) {}

  getScore(userid: string): Observable<any> {
    return this._httpClient.post(
      'https://localhost:44396/api/GetScoreByTeacher?idUser=' + userid,
      {}
    );
  }
}
