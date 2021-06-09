import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxonomieDetailsComponent } from './taxonomie-details.component';

describe('TaxonomieDetailsComponent', () => {
  let component: TaxonomieDetailsComponent;
  let fixture: ComponentFixture<TaxonomieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxonomieDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxonomieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
