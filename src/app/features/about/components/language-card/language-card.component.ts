import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-language-card',
  standalone: true,
  imports: [],
  template: `
    <div class="lang-card__wrapper">
      <div class="lang-card">
        <h3 class="font-subHeading lang-card__heading">My languages</h3>
        <div class="lang-card__content">
          <span class="lang-card__content-item">eng</span>
          <span class="lang-card__content-item">fluent</span>
          <span class="lang-card__content-item">ger</span>
          <span class="lang-card__content-item">start</span>
          <span class="lang-card__content-item">ukr</span>
          <span class="lang-card__content-item">fluent</span>
          <span class="lang-card__content-item">rus</span>
          <span class="lang-card__content-item">fluent</span>
        </div>
      </div>
    </div>
  `,
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageCardComponent {

}
