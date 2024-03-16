import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgClass,
    SvgIconComponent,
    NgIf
  ],
  template: `
    <button
      class="btn content-center"
      [ngClass]="{
        'btn--gradient': btnType === 'gradient'
      }"
    >
      <span>{{btnText}}</span>
      <svg-icon
        *ngIf="btnSvgName"
        class="content-center"
        [src]="'assets/icons/' + btnSvgName + '.svg'"
        [stretch]="false"
        [svgStyle]="{'width.px': 16, 'height.px': 16}"
      ></svg-icon>
    </button>
  `,
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() btnText!: string;
  @Input() btnType: 'regular' | 'gradient' = 'regular';
  @Input() btnSvgName!: string;
}
