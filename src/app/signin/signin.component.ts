import { Component } from '@angular/core';
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
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  form!: FormGroup;
  errorMessage$!: Observable<string>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  logIn() {
    if (this.form.valid) {
      // this.store.dispatch(userLogin({ user: this.form.value }));
      // // this.router.navigate(['/home']);
      const { email, password } = this.form.value;
      const payload = { email, password };
      this.store.dispatch(AuthActions.signIn({ payload }));

      this.errorMessage$ = this.store.select((state) => {
        return state.auth.error;
      }) as Observable<string>;

      // Submit the form
    } else {
      // Mark all fields as touched to display validation errors
      Object.keys(this.form.controls).forEach((field) => {
        const control = this.form.get(field);
        control!.markAsTouched({ onlySelf: true });
      });
    }
  }
}
