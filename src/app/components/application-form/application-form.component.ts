import { Component, OnInit } from "@angular/core";
import { Application } from "src/app/models/Application.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { ActivatedRoute } from "@angular/router";
import { ApplicationService } from "src/app/services/application.service";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-application-form",
  templateUrl: "./application-form.component.html",
  styleUrls: ["./application-form.component.scss"]
})
export class ApplicationFormComponent implements OnInit {
  public application: Application = null;
  public showErrors = false;

  public get title(): string {
    if (this.editMode) {
      return "Edit Application";
    }
    return "Create Application";
  }

  public get errors(): string[] {
    const myErrors = [];
    if (this.nameInvalid) {
      myErrors.push("Please provide a name.");
    }
    if (this.descriptionInvalid) {
      myErrors.push("Please provide a description.");
    }
    if (this.linkInvalid) {
      myErrors.push("Please provide a link.");
    }
    if (this.iconInvalid) {
      myErrors.push("Please provide an icon.");
    }
    if (this.statusInvalid) {
      myErrors.push("Please provide a valid status (0, 1, or 2).");
    }
    return myErrors;
  }

  public get valid(): boolean {
    return this.errors.length === 0;
  }

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.application);
  }

  public get editMode(): boolean {
    return this.ready && BooleanHelper.hasValue(this.application._id);
  }

  private get nameInvalid(): boolean {
    return !BooleanHelper.hasValue(this.application.name);
  }

  private get descriptionInvalid(): boolean {
    return !BooleanHelper.hasValue(this.application.description);
  }

  private get linkInvalid(): boolean {
    return !BooleanHelper.hasValue(this.application.link);
  }

  private get iconInvalid(): boolean {
    return !BooleanHelper.hasValue(this.application.icon);
  }

  private get statusInvalid(): boolean {
    return ![0, 1, 2].includes(this.application.status);
  }

  constructor(
    private route: ActivatedRoute,
    private applicationService: ApplicationService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.setupForm();
  }

  public updateDescription(event) {
    this.application.description = event.target.value;
  }

  public submit() {
    this.showErrors = true;
    if (this.valid) {
      this.save();
    }
  }

  private save() {
    if (this.editMode) {
      this.runEdit();
    } else {
      this.runCreate();
    }
  }

  private runEdit() {
    let response;
    this.applicationService.updateApplication(this.application)
      .subscribe((res) => response = res,
        (error) => {
          console.log("update application failed");
        }, () => {
          this.navHelper.goToApplicationOverview();
        });
  }

  private runCreate() {
    let response;
    this.applicationService.createApplication(this.application)
      .subscribe((res) => response = res,
        (error) => {
          console.log("create application failed");
        }, () => {
          this.navHelper.goToApplicationOverview();
        });
  }

  private setupForm() {
    const urlId = this.route.snapshot.paramMap.get("id");
    if (BooleanHelper.notNull(urlId)) {
      this.setupEditForm(urlId);
    } else {
      this.setupCreateForm();
    }
  }

  private setupEditForm(id: string): void {
    this.applicationService.getSingleApplication(id)
      .subscribe((res) => this.application = res,
        (error) => {
          console.log("get application failed");
        });
  }

  private setupCreateForm(): void {
    this.application = {
      name: null,
      description: null,
      link: null,
      icon: null,
      status: 0,
      _id: null,
    };
  }

}
