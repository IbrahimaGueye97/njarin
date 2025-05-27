import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesComponentComponent } from './roles-component.component';

describe('RolesComponentComponent', () => {
  let component: RolesComponentComponent;
  let fixture: ComponentFixture<RolesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
