import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carosel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.css'],
})
// export class CaroselComponent {}
export class CaroselComponent implements OnInit {
  slider: any;
  defaultTransform: any;
  goNext() {
    this.defaultTransform = this.defaultTransform - 398;
    if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1.7)
      this.defaultTransform = 0;
    this.slider.style.transform = 'translateX(' + this.defaultTransform + 'px)';
  }
  goPrev() {
    if (Math.abs(this.defaultTransform) === 0) this.defaultTransform = 0;
    else this.defaultTransform = this.defaultTransform + 398;
    this.slider.style.transform = 'translateX(' + this.defaultTransform + 'px)';
  }
  constructor() {}

  ngOnInit(): void {
    this.slider = document.getElementById('slider');
    this.defaultTransform = 0;
  }
}
