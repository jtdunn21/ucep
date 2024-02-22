import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABadgeComponent } from './a-badge.component';

describe('ABadgeComponent', () => {
  let component: ABadgeComponent;
  let fixture: ComponentFixture<ABadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ABadgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ABadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
