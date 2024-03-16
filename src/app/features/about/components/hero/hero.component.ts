import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroPortraitComponent } from '../hero-portrait/hero-portrait.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    HeroPortraitComponent,
    ButtonComponent
  ],
  templateUrl: './hero.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {

}
