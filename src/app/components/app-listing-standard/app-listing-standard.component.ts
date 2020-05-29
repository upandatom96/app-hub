import {Component, Input} from "@angular/core";
import {Application} from "../../models/Application.model";
import {NavHelperService} from "../../services/nav-helper.service";

@Component({
  selector: "app-app-listing-standard",
  templateUrl: "./app-listing-standard.component.html",
  styleUrls: ["./app-listing-standard.component.scss"]
})
export class AppListingStandardComponent {
  @Input() public apps: Application[] = [];

  constructor(
    private navHelperService: NavHelperService,
  ) {
  }

  public goDetails(app: Application) {
    this.navHelperService.goToApplicationDetails(app._id);
  }

}
