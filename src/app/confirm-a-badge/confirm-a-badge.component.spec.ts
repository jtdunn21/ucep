import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmABadgeComponent } from './confirm-a-badge.component';

describe('ConfirmABadgeComponent', () => {
  let component: ConfirmABadgeComponent;
  let fixture: ComponentFixture<ConfirmABadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmABadgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmABadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
