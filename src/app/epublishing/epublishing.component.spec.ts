import { ComponentFixture, TestBed ,} from '@angular/core/testing';

import { EpublishingComponent } from './epublishing.component';

describe('EpublishingComponent', () => {
  let component: EpublishingComponent;
  let fixture: ComponentFixture<EpublishingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpublishingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpublishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
