import { AppState } from './../State/appState';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentCardComponent } from '../comment-card/comment-card.component';
import { Observable } from 'rxjs';
import { Answer } from '../Interface';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { getAnswer } from '../State/Reducers/answerReducer';
import * as AnswerActions from '../State/Actions/answerAction';
import { state } from '@angular/animations';

@Component({
  selector: 'app-answers-card',
  standalone: true,
  imports: [CommonModule, CommentCardComponent],
  templateUrl: './answers-card.component.html',
  styleUrls: ['./answers-card.component.css'],
})
export class AnswersCardComponent implements OnInit {
  showComments = false;
  isModalOpen = false;
  qid!: string;
  // answers!: Observable<Answer[]>;
  answers$!: Observable<Answer[]>;

  constructor(
    // private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.qid = this.route.snapshot.paramMap.get('id') as string;
    // this.store.dispatch(GetAnswer({ questionId: this.qid }));
    // this.store.select((state) => console.log(state));
    // this.answers.subscribe((s) => console.log(s));
    this.store.dispatch(AnswerActions.GetAnswer({ questionId: this.qid }));
    this.answers$ = this.store.select((state) => {
      return state.answers.answers;
    });
    // this.answers$.subscribe((s) => console.log(s));
  }
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
