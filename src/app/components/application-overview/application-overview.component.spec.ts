import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ApplicationOverviewComponent } from "./application-overview.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { ApplicationTableComponent } from "../application-table/application-table.component";
import { LoadingComponent } from "../loading/loading.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { CardComponent } from "../card/card.component";

describe("ApplicationOverviewComponent", () => {
  let component: ApplicationOverviewComponent;
  let fixture: ComponentFixture<ApplicationOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ApplicationOverviewComponent, HeaderComponent, BodyComponent,
        ApplicationTableComponent, LoadingComponent, CardComponent
      ],
      imports: [HttpClientTestingModule, RouterTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
