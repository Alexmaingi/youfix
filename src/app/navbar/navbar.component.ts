import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showDropdown = false;

  constructor(private router: Router) {}

  isDashboard() {
    return this.router.url === '/dashboard';
  }

  inputValue!: string;
  isDisabled: boolean = true;

  checkInput() {
    this.isDisabled = !this.inputValue;
  }
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  username = localStorage.getItem('payload');
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/landing');
  }
}
