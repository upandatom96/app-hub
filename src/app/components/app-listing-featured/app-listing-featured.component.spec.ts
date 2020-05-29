import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListingFeaturedComponent } from './app-listing-featured.component';

describe('AppListingFeaturedComponent', () => {
  let component: AppListingFeaturedComponent;
  let fixture: ComponentFixture<AppListingFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppListingFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListingFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
