import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionsComponentComponent } from './interventions-component.component';

describe('InterventionsComponentComponent', () => {
  let component: InterventionsComponentComponent;
  let fixture: ComponentFixture<InterventionsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterventionsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterventionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
