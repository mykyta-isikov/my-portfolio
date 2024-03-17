import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { NgClass } from '@angular/common';
import { Observable, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-hyperlink',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `
    <a
      #hyperlink
      href="{{linkHref}}"
      class="hyperlink"
      [ngClass]="{
        'hyperlink--highlight': isHighlighted
      }"
    >{{linkText}}</a>
  `,
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HyperlinkComponent implements AfterViewInit, OnDestroy {
  @Input() linkHref!: string;
  @Input() linkText!: string;
  @Input() isHighlighted: boolean = false;
  @Input() parentClick$: Observable<void> = new Observable<void>();

  @ViewChild('hyperlink') hyperlinkRef!: ElementRef<HTMLAnchorElement>;

  _destroy$: Subject<void> = new Subject<void>();

  ngAfterViewInit() {
    /* Prevent recursive clicking trigger on parent element */
    this.hyperlinkRef.nativeElement.onclick = (event) => {
      event.stopPropagation();
    };

    /* Trigger native click on parent click event */
    this.parentClick$
      .pipe(
        tap(() => this.hyperlinkRef.nativeElement.click()),
        takeUntil(this._destroy$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    /* Clear observables */
    this._destroy$.next();
    this._destroy$.complete();
  }
}
