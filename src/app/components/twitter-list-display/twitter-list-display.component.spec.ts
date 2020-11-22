import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TwitterListDisplayComponent } from "./twitter-list-display.component";

describe("TwitterListDisplayComponent", () => {
  let component: TwitterListDisplayComponent;
  let fixture: ComponentFixture<TwitterListDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterListDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
