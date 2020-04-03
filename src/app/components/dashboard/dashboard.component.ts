import { Component } from "@angular/core";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { Application } from "src/app/models/Application.model";
import { ApplicationService } from "src/app/services/application.service";
import { CookieHelper } from "src/app/utilities/cookie.util";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {

  public get featuredApps(): Application[] {
    return this.appService.featuredApps;
  }

  public get archivedApps(): Application[] {
    return this.appService.archivedApps;
  }

  public get showArchive(): boolean {
    return CookieHelper.admin;
  }

  constructor(
    private navHelper: NavHelperService,
    private appService: ApplicationService,
  ) { }

  public goToInfo() {
    this.navHelper.goToInfo();
  }

  public goToDonate() {
    this.navHelper.goToDonate();
  }

}
