import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {AppListingStandardComponent} from "./app-listing-standard.component";
import {CardComponent} from "../card/card.component";
import {RouterTestingModule} from "@angular/router/testing";

describe("AppListingStandardComponent", () => {
  let component: AppListingStandardComponent;
  let fixture: ComponentFixture<AppListingStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppListingStandardComponent, CardComponent, ],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListingStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
