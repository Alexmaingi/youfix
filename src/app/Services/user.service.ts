import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  token = localStorage.getItem('token');
  headers = new HttpHeaders().set('token', `${this.token}`);

  getUsers(): Observable<User[]> {
    const url = 'http://localhost:5000/users';
    return this.http.get<User[]>(url, { headers: this.headers });
  }
}
