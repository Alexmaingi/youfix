import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddQuestionSuccess, AddQuestions, Questions } from '../Interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  token = localStorage.getItem('token');
  headers = new HttpHeaders().set('token', `${this.token}`);

  getQuestions(pageNumber: number, pageSize: number): Observable<Questions[]> {
    const url = `http://localhost:5000/questions?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return this.http.get<Questions[]>(url, { headers: this.headers });
  }

  getmyQuestions(userId: string): Observable<Questions[]> {
    return this.http.get<Questions[]>(
      `http://localhost:5000/questions/${userId}`
    );
  }
  addQuestion(
    userId: string,
    questions: AddQuestions
  ): Observable<AddQuestionSuccess> {
    let uid = localStorage.getItem('id');

    return this.http.post<AddQuestionSuccess>(
      `http://localhost:5000/questions/${uid}`,
      questions,
      { headers: this.headers }
    );
  }

  getOneQuestion(id: string): Observable<Questions> {
    return this.http.get<Questions>(
      `http://localhost:5000/questions/question/${id}`,
      { headers: this.headers }
    );
  }

  updateQuestion(
    userId: string,
    id: string,
    property: AddQuestions
  ): Observable<AddQuestionSuccess> {
    return this.http.put<AddQuestionSuccess>(
      `http://localhost:5000/questions/update/${id}/${userId}`,
      property
    );
  }

  deleteQuestion(id: string): Observable<AddQuestionSuccess> {
    return this.http.delete<AddQuestionSuccess>(
      `http://localhost:5000/questions/delete/${id}`
    );
  }
}
