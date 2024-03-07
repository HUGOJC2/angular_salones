import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PisoC1Component } from './piso1.component';

describe('Piso1Component', () => {
  let component: PisoC1Component;
  let fixture: ComponentFixture<PisoC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PisoC1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PisoC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
