import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  myForm!: FormGroup;
  errorMessage!: null;
  form: any;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  signUp() {
    if (this.myForm.valid) {
      // Submit the form
      console.log(this.myForm.value);
    } else {
      // Mark all fields as touched to display validation errors
      Object.keys(this.myForm.controls).forEach((field) => {
        const control = this.myForm.get(field);
        control!.markAsTouched({ onlySelf: true });
      });
    }
  }
}
