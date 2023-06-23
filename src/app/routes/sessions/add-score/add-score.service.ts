import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddScoreService {
  constructor(private _httpClient: HttpClient) {}

  getScore(userid: string): Observable<any> {
    return this._httpClient.post(
      'https://localhost:44396/api/GetStudenByTeacher?idUser=' + userid,
      {}
    );
  }

  addScore(userid: string, id_subject: string, score: string): Observable<any> {
    return this._httpClient.post(
      'https://localhost:44396/api/AddScore?idUser=' +
        userid +
        '&id_subject=' +
        id_subject +
        '&score=' +
        score,
      {}
    );
  }
}
