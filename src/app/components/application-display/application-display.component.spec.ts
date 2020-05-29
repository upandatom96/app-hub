import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ApplicationDisplayComponent} from "./application-display.component";
import {BodyComponent} from "../body/body.component";
import {HeaderComponent} from "../header/header.component";
import {LoadingComponent} from "../loading/loading.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {CardComponent} from "../card/card.component";

describe("ApplicationDisplayComponent", () => {
  let component: ApplicationDisplayComponent;
  let fixture: ComponentFixture<ApplicationDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ApplicationDisplayComponent, BodyComponent, HeaderComponent,
        LoadingComponent, CardComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
