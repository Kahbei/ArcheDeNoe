import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxonomieComponent } from './taxonomie.component';

describe('TaxonomieComponent', () => {
  let component: TaxonomieComponent;
  let fixture: ComponentFixture<TaxonomieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxonomieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxonomieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
