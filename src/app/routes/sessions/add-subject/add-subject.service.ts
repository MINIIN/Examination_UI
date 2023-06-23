import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddSubjectService {
  constructor(private _httpClient: HttpClient) {}

  addSubject(subjectName: string, userId: string): Observable<any> {
    return this._httpClient.post(
      'https://localhost:44396/api/AddSubject?subjectName=' + subjectName + '&teacherId=' + userId,
      {}
    );
  }
}
