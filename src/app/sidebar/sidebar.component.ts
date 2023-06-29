import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private router: Router) {}

  isDashboard() {
    return this.router.url === '/dashboard';
  }
  isadminDashboard() {
    return this.router.url === '/admin';
  }

  username = localStorage.getItem('payload');
}
