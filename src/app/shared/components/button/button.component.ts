import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `
    <button
      [ngClass]="{
        'btn': true,
        'btn--gradient': btnType === 'gradient'
      }"
    >
      {{btnText}}
    </button>
  `,
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() btnText!: string;
  @Input() btnType: 'regular' | 'gradient' = 'regular';
}
