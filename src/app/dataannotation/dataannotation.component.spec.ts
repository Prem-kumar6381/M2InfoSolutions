import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataannotationComponent } from './dataannotation.component';

describe('DataannotationComponent', () => {
  let component: DataannotationComponent;
  let fixture: ComponentFixture<DataannotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataannotationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataannotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
