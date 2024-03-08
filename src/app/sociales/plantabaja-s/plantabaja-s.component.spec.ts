import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantabajaSComponent } from './plantabaja-s.component';

describe('PlantabajaSComponent', () => {
  let component: PlantabajaSComponent;
  let fixture: ComponentFixture<PlantabajaSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantabajaSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantabajaSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
