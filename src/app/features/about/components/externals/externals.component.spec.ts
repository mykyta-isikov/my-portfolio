import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalsComponent } from './externals.component';

describe('ExternalsComponent', () => {
  let component: ExternalsComponent;
  let fixture: ComponentFixture<ExternalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ExternalsComponent ]
    })
      .compileComponents();
    
    fixture = TestBed.createComponent(ExternalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
