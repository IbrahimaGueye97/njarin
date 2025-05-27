import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsComponentComponent } from './evaluations-component.component';

describe('EvaluationsComponentComponent', () => {
  let component: EvaluationsComponentComponent;
  let fixture: ComponentFixture<EvaluationsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluationsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
