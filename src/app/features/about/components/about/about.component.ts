import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { BioComponent } from '../bio/bio.component';
import { ExternalsComponent } from '../externals/externals.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ HeroComponent, BioComponent, ExternalsComponent ],
  templateUrl: './about.component.html',
  styles: ''
})
export class AboutComponent {

}
