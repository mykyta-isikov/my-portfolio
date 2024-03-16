import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroPortraitComponent } from '../hero-portrait/hero-portrait.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    HeroPortraitComponent,
    ButtonComponent,
    SvgIconComponent
  ],
  templateUrl: './hero.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
}
