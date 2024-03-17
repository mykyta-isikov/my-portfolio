import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HyperlinkComponent } from '../hyperlink/hyperlink.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { NgIf } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-block-hyperlink',
  standalone: true,
  imports: [
    HyperlinkComponent,
    SvgIconComponent,
    NgIf
  ],
  template: `
    <div
      [tabindex]="0"
      class="block-hyperlink svg-with-text-container"
      (click)="blockHyperlinkClickHandler()"
      (keydown)="blockHyperlinkClickHandler()"
    >
      <svg-icon
        *ngIf="svgName"
        [src]="'assets/icons/' + svgName + '.svg'"
        [stretch]="false"
      ></svg-icon>
      <app-hyperlink
        [linkHref]="linkHref"
        [linkText]="linkText"
        [isHighlighted]="isHighlighted"
        [parentClick$]="this._blockHyperlinkClick$.asObservable()"
      ></app-hyperlink>
    </div>
  `,
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockHyperlinkComponent {
  /* app-hyperlink properties */
  @Input() linkHref!: string;
  @Input() linkText!: string;
  @Input() isHighlighted: boolean = false;
  /* svg-icon properties */
  @Input() svgSize: 'medium' | 'large' = 'large';
  @Input() svgName!: string;

  _blockHyperlinkClick$: Subject<void> = new Subject<void>();

  blockHyperlinkClickHandler = () => {
    this._blockHyperlinkClick$.next();
  };
}
