import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HyperlinkComponent } from '../../../../shared/components/hyperlink/hyperlink.component';
import { BlockHyperlinkComponent } from '../../../../shared/components/block-hyperlink/block-hyperlink.component';

@Component({
  selector: 'app-externals',
  standalone: true,
  imports: [
    HyperlinkComponent,
    BlockHyperlinkComponent
  ],
  templateUrl: './externals.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExternalsComponent {

}
