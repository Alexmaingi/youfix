import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HomeCardComponent } from '../home-card/home-card.component';
import { TagsComponent } from '../tags/tags.component';
import { UsersComponent } from '../users/users.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    HomeCardComponent,
    TagsComponent,
    UsersComponent,
    RouterModule,

    FormsModule,
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  inputValue: any;
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

  // inputValue = '';
  // isDisabled = true;

  // checkInput() {
  //   this.isDisabled = this.inputValue.trim().length === 0;
}
