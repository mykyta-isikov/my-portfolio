import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-language-card',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  template: `
    <div class="lang-card__wrapper">
      <div #card class="lang-card">
        <div class="lang-card__front">
          <h3 class="font-subHeading lang-card__heading">My languages</h3>
          <div class="lang-card__content">
            <span class="lang-card__content-item">English</span>
            <span class="lang-card__content-item">fluent</span>
            <span class="lang-card__content-item">German</span>
            <span class="lang-card__content-item">interm</span>
            <span class="lang-card__content-item">Ukrainian</span>
            <span class="lang-card__content-item">fluent</span>
            <span class="lang-card__content-item">Russian</span>
            <span class="lang-card__content-item">fluent</span>
          </div>
        </div>
        <div class="lang-card__back">

        </div>
      </div>
    </div>
  `,
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageCardComponent implements AfterViewInit {
  @ViewChild('card') cardRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;

    window.onmousemove = (event) => {
      if (!window.matchMedia('(pointer: fine)').matches) return;
      const posX = event.clientX;
      const posY = event.clientY;

      const turnX = -((posY/winHeight) - 0.5) / 10;
      const turnY = ((posX/winWidth) - 0.5) / 10 - 0.05;

      const newTransform = `rotateX(${turnX}turn) rotateY(${turnY}turn)`;
      this.cardRef.nativeElement.style.transition = 'none';
      this.cardRef.nativeElement.style.transform = newTransform;

    };

    window.onmouseout = () => {
      if (!window.matchMedia('(pointer: fine)').matches) return;
      this.cardRef.nativeElement.style.transform = 'rotateX(0turn) rotateY(-0.05turn)';
      this.cardRef.nativeElement.style.transition = 'transform 300ms ease-out';
    };
  }
}
