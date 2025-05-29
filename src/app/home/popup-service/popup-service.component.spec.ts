import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupServiceComponent } from './popup-service.component';

describe('PopupServiceComponent', () => {
  let component: PopupServiceComponent;
  let fixture: ComponentFixture<PopupServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
