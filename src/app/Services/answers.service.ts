import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddAnswerSuccess, Answer } from '../Interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnswersService {
  constructor(private http: HttpClient) {}

  token = localStorage.getItem('token');
  headers = new HttpHeaders().set('token', `${this.token}`);

  getAnswers(questionId: string): Observable<Answer[]> {
    const url = `http://localhost:5000/answers/${questionId} `;
    return this.http.get<Answer[]>(url, { headers: this.headers });
  }

  addAnswers(questionId: string, answer: Answer): Observable<AddAnswerSuccess> {
    let uid = localStorage.getItem('id');

    return this.http.post<AddAnswerSuccess>(
      `http://localhost:5000/answers/${questionId}/${uid}`,
      answer,
      { headers: this.headers }
    );
  }
}
