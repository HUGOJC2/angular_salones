import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantabajaIComponent } from './plantabaja-i.component';

describe('PlantabajaIComponent', () => {
  let component: PlantabajaIComponent;
  let fixture: ComponentFixture<PlantabajaIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantabajaIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantabajaIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
