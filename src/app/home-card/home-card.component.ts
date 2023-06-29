import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswersCardComponent } from '../answers-card/answers-card.component';
import { Router, RouterModule } from '@angular/router';
import { Answer, Questions } from '../Interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../State/appState';
import { getQuestion } from '../State/Reducers/questionReducer';
import * as QuestionActions from '../State/Actions/questionAction';
import { getAnswer } from '../State/Reducers/answerReducer';
import { GetAnswer } from '../State/Actions/answerAction';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [CommonModule, AnswersCardComponent, RouterModule],
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css'],
})
export class HomeCardComponent implements OnInit {
  showAnswers = false;
  showToolkit = false;
  isModalOpen = false;
  questions!: Observable<Questions[]>;
  // constructor(private store: Store<AppState>, private router: Router) {}

  questions$ = this.store.select((state) => state.question.question);
  pageNumber = 1;
  pageSize = 100;
  totalPages = 0;
  answer!: Observable<Answer[]>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.retrieveQuestions();
  }

  retrieveQuestions() {
    this.store.dispatch(
      QuestionActions.GetQuestion({
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
      })
    );

    // Subscribe to the state to get the total pages
    this.store
      .select((state) => state.question.totalPages)
      .subscribe((totalPages) => (this.totalPages = totalPages));
  }

  previousPage() {
    if (this.pageNumber >= 1) {
      this.pageNumber--;
      this.retrieveQuestions();
    }
  }

  nextPage() {
    if (this.pageNumber <= this.totalPages) {
      this.pageNumber++;
      this.retrieveQuestions();
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  inDashboard() {
    return this.router.url === '/dashboard';
  }

  oneAnswer(id: string) {
    this.router.navigate([`/question/${id}`]);
  }

  ngOnInit(): void {
    // this.answer = this.store.select(getAnswer);
    // this.store.dispatch(GetAnswer({questionId:String}));
    // console.log(this.router);
  }
}
