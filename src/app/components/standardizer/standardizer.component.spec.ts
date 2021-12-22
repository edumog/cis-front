import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardizerComponent } from './standardizer.component';

describe('StandardizerComponent', () => {
  let component: StandardizerComponent;
  let fixture: ComponentFixture<StandardizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
