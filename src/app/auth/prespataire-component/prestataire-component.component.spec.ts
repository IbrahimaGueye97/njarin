import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestataireComponentComponent } from './prestataire-component.component';

describe('PrespataireComponentComponent', () => {
  let component: PrestataireComponentComponent;
  let fixture: ComponentFixture<PrestataireComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestataireComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestataireComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
