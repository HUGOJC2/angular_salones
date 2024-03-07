import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PisoB3Component } from './piso3.component';

describe('Piso3Component', () => {
  let component: PisoB3Component;
  let fixture: ComponentFixture<PisoB3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PisoB3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PisoB3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
