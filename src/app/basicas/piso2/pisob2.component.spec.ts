import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PisoB2Component } from './piso2.component';

describe('Piso2Component', () => {
  let component: PisoB2Component;
  let fixture: ComponentFixture<PisoB2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PisoB2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PisoB2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
