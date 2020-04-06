import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ApplicationFormComponent } from "./application-form.component";
import { CardComponent } from "../card/card.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { FormsModule } from "@angular/forms";
import { LoadingComponent } from "../loading/loading.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ApplicationFormComponent", () => {
  let component: ApplicationFormComponent;
  let fixture: ComponentFixture<ApplicationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ApplicationFormComponent, CardComponent,
        HeaderComponent, BodyComponent, LoadingComponent
      ],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
