import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminDashbordService {
  constructor(private _httpClient: HttpClient) {}

  getUser(): Observable<any> {
    return this._httpClient.get('https://localhost:44396/api/GetUser', {});
  }

  getExamination(): Observable<any> {
    return this._httpClient.get('https://localhost:44396/api/GetSubject1', {});
  }

  getaddress(): Observable<any> {
    return this._httpClient.get('https://localhost:44396/api/GetAddress', {});
  }

  getbalance(): Observable<any> {
    return this._httpClient.get('https://localhost:44396/api/GetAccountBalance', {});
  }

  getcountBlock(): Observable<any> {
    return this._httpClient.get('https://localhost:44396/api/GetBlockNumber', {});
  }

  getlastTxAddress(): Observable<any> {
    return this._httpClient.get('https://localhost:44396/api/GetLastTxAddress', {});
  }

  // getlastData(): Observable<any> {
  //   return this._httpClient.get('https://localhost:44396/api/GetLastTxAddress', {});
  // }
}
