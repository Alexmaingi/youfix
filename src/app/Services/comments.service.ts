import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCommentSuccess } from '../Interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  token = localStorage.getItem('token');
  headers = new HttpHeaders().set('token', `${this.token}`);

  getAnswers(answerId: string): Observable<Comment[]> {
    const url = `http://localhost:5000/comments/${answerId}/ `;
    return this.http.get<Comment[]>(url, { headers: this.headers });
  }

  addAnswers(
    answerId: string,
    comment: Comment
  ): Observable<AddCommentSuccess> {
    let uid = localStorage.getItem('id');

    return this.http.post<AddCommentSuccess>(
      `http://localhost:5000/comments/${answerId}/${uid}`,
      comment,
      { headers: this.headers }
    );
  }
}
