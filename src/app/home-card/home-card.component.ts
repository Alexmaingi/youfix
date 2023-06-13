import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswersCardComponent } from '../answers-card/answers-card.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [CommonModule, AnswersCardComponent, RouterModule],
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css'],
})
export class HomeCardComponent {
  showAnswers = false;
  showToolkit = false;
  isModalOpen = false;
  constructor(private router: Router) {}

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  inDashboard() {
    return this.router.url === '/dashboard';
  }
}
