// import { Injectable } from '@angular/core';
// import { LogUserSuccess } from '../Interface';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   role!: string | null;
//   token!: string | null;

//   constructor() {}

//   login(res: LogUserSuccess) {
//     localStorage.setItem('token', res.token);
//   }
//   logout() {
//     localStorage.clear();
//   }
//   isloggedIn() {
//     let token = localStorage.getItem('token');
//     this.token = token ? token : null;

//     return this.token ? true : false;
//   }
// }
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddUserSuccess, LoginUser, NewUser } from '../Interface';

@Injectable()
export class AuthService {
  private http = inject(HttpClient);
  private url = `http://localhost:5000/users`;

  // constructor(private http: HttpClient) {}

  signUp(payload: NewUser): Observable<AddUserSuccess> {
    return this.http.post<AddUserSuccess>(this.url, payload);
  }

  signIn(payload: LoginUser): Observable<AddUserSuccess> {
    return this.http.post<AddUserSuccess>(`${this.url}/login`, payload);
  }

  isSignedIn() {
    let token = localStorage.getItem('token');
    return token ? true : false;
  }
}
