import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Answer, Questions } from '../Interface';
import { AppState } from '../State/appState';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import * as QuestionActions from '../State/Actions/questionAction';
import { AnswersCardComponent } from '../answers-card/answers-card.component';
import * as AnswerActions from './../State/Actions/answerAction';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// import { selectQuestion } from '../State/Reducers/questionReducer';

@Component({
  selector: 'app-one-question',
  standalone: true,
  imports: [
    CommonModule,
    AnswersCardComponent,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './one-question.component.html',
  styleUrls: ['./one-question.component.css'],
})
export class OneQuestionComponent implements OnInit {
  [x: string]: any;
  showAnswers = false;
  showToolkit = false;
  isModalOpen = false;
  question$!: Observable<Questions | null>;
  // constructor(private store: Store<AppState>, private router: Router) {}

  questions$ = this.store.select((state) => state.question.question);
  pageNumber = 1;
  pageSize = 100;
  totalPages = 0;
  answer!: Observable<Answer[]>;
  qid: any;
  myForm!: FormGroup;
  // q: any;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  // Subscribe to the state to get the total pages

  // openModal() {
  //   this.isModalOpen = true;
  // }

  // closeModal() {
  //   this.isModalOpen = false;
  // }

  inDashboard() {
    return this.router.url === '/dashboard';
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      body: ['', [Validators.required]],
    });
    this.qid = this.route.snapshot.paramMap.get('id') as string;

    // this.answer = this.store.select(getAnswer);
    // this.store.dispatch(GetAnswer({questionId:String}));
    // console.log(this.router);
    // this.store
    //   .select((state) => state.question.totalPages)
    //   .subscribe((totalPages) => (this.totalPages = totalPages));
    // this.qid = this.route.snapshot.params['id'];
    this.store.dispatch(QuestionActions.GetOneQuestion({ id: this.qid }));
    // console.log(this.qid);
    this.question$ = this.store.select((state) => state.question.oneQuestion);
  }
  isAdmin() {
    const admin = this.router.url === '/admin/adminquestions';
    return admin;
  }
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  SubmitForm() {
    // console.log(typeof this.id, this.id);

    // if(this.id==='1'){
    // this.propertyService.addProperty(this.form.value).subscribe(
    //   res=>{
    //     console.log(res);

    //   }
    // )

    // console.log(this.myForm.value);
    // this.store.dispatch(
    //   Addquestion({
    //     newQuestion: this.myForm.value,
    //     userId: localStorage.getItem('id') as string,
    //   })
    // );

    // this.store.dispatch(
    // AnswerActions.Addanswer({
    //   questionId: this.qid,
    //   uid: localStorage.getItem('id') as string,
    // })
    // );

    this.myForm.reset();
    this.router.navigate(['/home']);
  }
  oneAnswer(id: string) {
    this.router.navigate([`/question/${id}`]);
  }
}
