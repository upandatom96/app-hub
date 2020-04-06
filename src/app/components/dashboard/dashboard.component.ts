import { Component, OnInit } from "@angular/core";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { Application } from "src/app/models/Application.model";
import { ApplicationService } from "src/app/services/application.service";
import { CookieHelper } from "src/app/utilities/cookie.util";
import { BooleanHelper } from 'src/app/utilities/boolean.util';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  public applications: Application[] = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.applications);
  }

  public get featuredApps(): Application[] {
    return this.applications.filter((app) => {
      return app.status === 2;
    });
  }

  public get readyApps(): Application[] {
    return this.applications.filter((app) => {
      return app.status === 1;
    });
  }

  public get archivedApps(): Application[] {
    return this.applications.filter((app) => {
      return app.status === 0;
    });
  }

  public get showArchive(): boolean {
    return CookieHelper.admin;
  }

  constructor(
    private navHelper: NavHelperService,
    private appService: ApplicationService,
  ) { }

  public ngOnInit() {
    this.loadApps();
  }

  public goToInfo() {
    this.navHelper.goToInfo();
  }

  public goToDonate() {
    this.navHelper.goToDonate();
  }

  private loadApps(): void {
    this.applications = null;
    this.appService.getApplications()
      .subscribe((res) => this.applications = res,
        (error) => {
          console.log("get apps failed");
        });
  }


}
