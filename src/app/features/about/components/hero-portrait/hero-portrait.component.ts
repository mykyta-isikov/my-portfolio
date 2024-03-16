import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero-portrait',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  template: `
    <img
      alt="portrait"
      ngSrc="/assets/images/portrait.webp"
      height="557"
      width="557"
      class="hero-portrait__image"
      priority
    />
  `,
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroPortraitComponent {

}
