import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFormComponent } from './application-form.component';
import { CardComponent } from '../card/card.component';

describe('ApplicationFormComponent', () => {
  let component: ApplicationFormComponent;
  let fixture: ComponentFixture<ApplicationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationFormComponent, CardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
