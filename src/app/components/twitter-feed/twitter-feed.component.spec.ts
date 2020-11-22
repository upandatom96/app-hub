import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {TwitterFeedComponent} from "./twitter-feed.component";
import {BodyComponent} from "../body/body.component";

describe("TwitterFeedComponent", () => {
  let component: TwitterFeedComponent;
  let fixture: ComponentFixture<TwitterFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TwitterFeedComponent, BodyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
