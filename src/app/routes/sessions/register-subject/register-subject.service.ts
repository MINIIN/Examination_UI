import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterSubjectService {
  constructor(private _httpClient: HttpClient) {}

  addSubject(subjectName: string, userId: string): Observable<any> {
    return this._httpClient.post(
      'https://localhost:44396/api/RegisterSubject?userid=' + userId + '&subjectid=' + subjectName,
      {}
    );
    // https://localhost:44396/api/RegisterSubject?userid=11&subjectid=2
  }

  getSubject(userid: string): Observable<any> {
    return this._httpClient.post(
      'https://localhost:44396/api/GetRegisterSubject?userid=' + userid,
      {}
    );
  }
}
