import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaroselComponent } from '../carosel/carosel.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, CaroselComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {}
