import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HomeCardComponent } from '../home-card/home-card.component';

@Component({
  selector: 'app-user-dasboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent, RouterModule, HomeCardComponent],
  templateUrl: './user-dasboard.component.html',
  styleUrls: ['./user-dasboard.component.css'],
})
export class UserDasboardComponent {}
