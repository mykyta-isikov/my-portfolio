import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { BioComponent } from '../bio/bio.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ HeroComponent, BioComponent ],
  templateUrl: './about.component.html',
  styles: ''
})
export class AboutComponent {

}
