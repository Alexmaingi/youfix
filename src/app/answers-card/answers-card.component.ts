import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentCardComponent } from '../comment-card/comment-card.component';

@Component({
  selector: 'app-answers-card',
  standalone: true,
  imports: [CommonModule, CommentCardComponent],
  templateUrl: './answers-card.component.html',
  styleUrls: ['./answers-card.component.css'],
})
export class AnswersCardComponent {
  showComments = false;
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
