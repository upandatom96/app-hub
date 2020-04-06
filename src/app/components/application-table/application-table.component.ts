import { Component, OnInit } from "@angular/core";
import { Application } from "src/app/models/Application.model";
import { CookieHelper } from "src/app/utilities/cookie.util";
import { ApplicationService } from "src/app/services/application.service";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-application-table",
  templateUrl: "./application-table.component.html",
  styleUrls: ["./application-table.component.scss"]
})
export class ApplicationTableComponent implements OnInit {
  public applications: Application[] = null;
  public error = false;

  public get canEdit(): boolean {
    return CookieHelper.admin;
  }

  public get ready(): boolean {
    return this.applications !== null;
  }

  public get hasApp(): boolean {
    return this.applications.length > 0;
  }

  constructor(
    private applicationService: ApplicationService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.loadApps();
  }

  public appDetails(application: Application): void {
    this.navHelper.goToApplicationDetails(application._id);
  }

  public createApplication(): void {
    this.navHelper.goToApplicationCreateForm();
  }

  public editApp(app: Application): void {
    this.navHelper.goToApplicationEditForm(app._id);
  }

  public requestDelete(app: Application): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${app.name}?`);
    if (confirmDelete) {
      this.deleteApp(app);
    }
  }

  private deleteApp(application: Application): void {
    this.applicationService.deleteApplication(application._id)
      .subscribe((res) => this.applications = res,
        (error) => {
          console.log("delete app failed");
        }, () => {
          this.loadApps();
        });
  }

  private loadApps(): void {
    this.applications = null;
    this.error = false;
    this.applicationService.getApplications()
      .subscribe((res) => this.applications = res,
        (error) => {
          this.error = true;
          console.log("get apps failed");
        });
  }

}
