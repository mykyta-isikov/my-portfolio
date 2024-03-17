import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockHyperlinkComponent } from './block-hyperlink.component';

describe('BlockHyperlinkComponent', () => {
  let component: BlockHyperlinkComponent;
  let fixture: ComponentFixture<BlockHyperlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BlockHyperlinkComponent ]
    })
      .compileComponents();
    
    fixture = TestBed.createComponent(BlockHyperlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
