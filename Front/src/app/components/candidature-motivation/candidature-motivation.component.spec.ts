import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatureMotivationComponent } from './candidature-motivation.component';

describe('CandidatureMotivationComponent', () => {
  let component: CandidatureMotivationComponent;
  let fixture: ComponentFixture<CandidatureMotivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatureMotivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatureMotivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
