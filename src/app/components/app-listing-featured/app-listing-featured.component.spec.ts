import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {AppListingFeaturedComponent} from "./app-listing-featured.component";
import {CardComponent} from "../card/card.component";
import {RouterTestingModule} from "@angular/router/testing";

describe("AppListingFeaturedComponent", () => {
  let component: AppListingFeaturedComponent;
  let fixture: ComponentFixture<AppListingFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppListingFeaturedComponent, CardComponent, ],
      imports: [RouterTestingModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListingFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
