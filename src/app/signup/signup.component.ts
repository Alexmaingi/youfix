import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import * as AuthActions from '../State/Actions/authAction';
import { AppState } from '../State/appState';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  myForm!: FormGroup;
  errorMessage!: null;
  userService: any;
  form: any;
  errorMessage$!: Observable<string>;
  // form: string;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      // phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  signUp() {
    if (this.myForm.valid) {
      // Submit the form
      const { username, email, password } = this.myForm.value;
      console.log({ username, email, password });
      const payload = { username, email, password };
      this.store.dispatch(AuthActions.signUp({ payload }));
      this.errorMessage$ = this.store.select(
        (state) => state.auth.error
      ) as Observable<string>;
    } else {
      // Mark all fields as touched to display validation errors
      Object.keys(this.myForm.controls).forEach((field) => {
        const control = this.myForm.get(field);
        control!.markAsTouched({ onlySelf: true });
      });
    }
  }
  get confirmPassword() {
    return this.myForm.controls['confirmPassword'];
  }

  // signUp() {
  //   if (this.signupForm.invalid) {
  //     return;
  //   }
  //   const { username, email, password } = this.signupForm.value;
  //   const payload = { username, email, password };
  //   this.store.dispatch(AuthActions.signUp({ payload }));
  //   this.errorMessage$ = this.store.select(
  //     (state) => state.auth.error
  //   ) as Observable<string>;
  // }
}
