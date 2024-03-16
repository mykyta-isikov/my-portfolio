import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ HeroComponent ],
  templateUrl: './about.component.html',
  styles: ''
})
export class AboutComponent {

}
