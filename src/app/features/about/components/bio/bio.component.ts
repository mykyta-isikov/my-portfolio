import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageCardComponent } from '../language-card/language-card.component';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [
    LanguageCardComponent
  ],
  templateUrl: './bio.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BioComponent {

}
