import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PisoB1Component } from './piso1.component';

describe('Piso1Component', () => {
  let component: PisoB1Component;
  let fixture: ComponentFixture<PisoB1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PisoB1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PisoB1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
