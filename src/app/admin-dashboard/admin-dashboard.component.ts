import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionCardComponent } from '../question-card/question-card.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    QuestionCardComponent,
    RouterModule,
    UsersComponent,
    SidebarComponent,
    NavbarComponent,
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {}
