import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlerteValidationCandidaturesComponent } from './alerte-validation-candidatures.component';

describe('AlerteValidationCandidaturesComponent', () => {
  let component: AlerteValidationCandidaturesComponent;
  let fixture: ComponentFixture<AlerteValidationCandidaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlerteValidationCandidaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlerteValidationCandidaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
