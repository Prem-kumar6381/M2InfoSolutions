import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityservicesComponent } from './accessibilityservices.component';

describe('AccessibilityservicesComponent', () => {
  let component: AccessibilityservicesComponent;
  let fixture: ComponentFixture<AccessibilityservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessibilityservicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessibilityservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
