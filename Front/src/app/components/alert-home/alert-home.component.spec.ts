import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertHomeComponent } from './alert-home.component';

describe('AlertHomeComponent', () => {
  let component: AlertHomeComponent;
  let fixture: ComponentFixture<AlertHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
