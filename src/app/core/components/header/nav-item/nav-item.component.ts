import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  template: `
    <a
      class="nav-item"
      routerLink="{{routerLink}}"
      routerLinkActive="nav-item-active"
      [routerLinkActiveOptions]="{ exact: exactRoute }"
    >{{text}}</a>
  `,
  styles: `
    $initial-underline-width: 0.5em;

    @mixin underline-pseudo($color, $initial-width) {
      content: '';
      position: absolute;
      bottom: -2px;
      height: 3px;
      width: $initial-width;
      background-color: $color;
    }

    .nav-item {
      font-size: 1.2em;
      padding: 0 5px;
      position: relative;
      text-decoration: none;
      color : var(--theme-text);

      &:before {
        @include underline-pseudo(var(--theme-secondary), $initial-underline-width);
        left: 0;
      }

      &:hover:before {
        animation: underline-in 250ms forwards ease-in;
      }

      &:after {
        animation: active-underline-out 250ms forwards ease-in;
      }


      &.nav-item-active:before {
          width: 100%;
          background-color: var(--theme-secondary);
          animation: active-underline-in 250ms forwards ease-in;
      }
    }

    @keyframes underline-in {
      from {
        width: $initial-underline-width;
      }

      to {
        width: 100%
      }
    }

    @keyframes active-underline-in {
      from {
        background-color: var(--theme-secondary);
      }

      to {
        width: 100%;
        background-color: var(--theme-primary);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavItemComponent {
  @Input() routerLink!: string;
  @Input() text!: string;
  @Input() exactRoute: boolean = false;
}
