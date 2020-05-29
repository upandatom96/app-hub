import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListingStandardComponent } from './app-listing-standard.component';

describe('AppListingStandardComponent', () => {
  let component: AppListingStandardComponent;
  let fixture: ComponentFixture<AppListingStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppListingStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListingStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
