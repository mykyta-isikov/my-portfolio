import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, HeaderComponent ],
  templateUrl: './app.component.html',
  styles: ''
})
export class AppComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {
  }
  ngAfterViewInit() {
    const appPreloader = this.renderer.selectRootElement('#appPreloader');
    this.renderer.setStyle(appPreloader, 'display', 'none');
  }
}
