import { Answer } from './../Interface/index';
import * as AnswerActions from './../State/Actions/answerAction';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Questions } from '../Interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../State/appState';
import * as QuestionActions from '../State/Actions/questionAction';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-question-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css'],
})
export class QuestionCardComponent {
  isModalOpen = false;
  myForm!: FormGroup;

  questions!: Observable<Questions[]>;
  // constructor(private store: Store<AppState>, private router: Router) {}

  questions$ = this.store.select((state) => state.question.question);
  pageNumber = 1;
  pageSize = 100;
  totalPages = 0;
  qid!: string;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
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

  ngOnInit(): void {
    this.myForm = this.fb.group({
      body: ['', [Validators.required]],
    });
    this.qid = this.route.snapshot.paramMap.get('id') as string;
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

    console.log(this.myForm.value);

    this.store.dispatch(
      AnswerActions.Addanswer({
        questionId: this.qid,
        uid: localStorage.getItem('id') as string,
        answer: { ...this.myForm.value },
      })
    );

    this.myForm.reset();
    // this.router.navigate(['/home']);
  }
  oneAnswer(id: string) {
    this.router.navigate([`/question/${id}`]);
  }
}
