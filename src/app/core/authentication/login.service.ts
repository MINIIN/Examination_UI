import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token, User } from './interface';
import { Menu } from '@core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(protected http: HttpClient) {}

  login(email: string, password: string) {
    // return this.http.post<Token>('/auth/login', { email, password, rememberMe });
    return this.http.post<Token>(
      'https://localhost:44396/api/login?email=' + email + '&password=' + password,
      {}
    );
    // https://localhost:44396/api/login?email=Test1%40mail.com&password=Test12
  }

  loginUser(email: string, password: string) {
    // return this.http.post<Token>('/auth/login', { email, password, rememberMe });
    return this.http.post(
      'https://localhost:44396/api/login?email=' + email + '&password=' + password,
      {}
    );
    // https://localhost:44396/api/login?email=Test1%40mail.com&password=Test12
  }

  // login1(email: string, password: string) {
  //   return this.http.post<Token>('/auth/login', { email, password, rememberMe });
  // }

  addUser(name: string, email: string, password: string, permission: string, studentId: string) {
    return this.http.post<Token>(
      'https://localhost:44396/api/AddUser/?name=' +
        name +
        '&email=' +
        email +
        '&password=' +
        password +
        '&permisson=' +
        permission +
        '&studentId=' +
        studentId,
      {}
    );
    //localhost:44396/api/AddUser?name=Test5&email=Test5%40email.com&password=Test5&permisson=3&studentId=6600004
  }

  refresh(params: Record<string, any>) {
    return this.http.post<Token>('/auth/refresh', params);
  }

  logout() {
    return this.http.post<any>('/auth/logout', {});
  }

  me() {
    return this.http.get<User>('/me');
  }

  menu() {
    return this.http.get<{ menu: Menu[] }>('/me/menu').pipe(map(res => res.menu));
  }
}
