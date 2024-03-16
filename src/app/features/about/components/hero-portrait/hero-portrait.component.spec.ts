import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPortraitComponent } from './hero-portrait.component';

describe('HeroPortraitComponent', () => {
  let component: HeroPortraitComponent;
  let fixture: ComponentFixture<HeroPortraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HeroPortraitComponent ]
    })
      .compileComponents();
    
    fixture = TestBed.createComponent(HeroPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
