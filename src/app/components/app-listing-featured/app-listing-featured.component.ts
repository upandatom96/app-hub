import {Component, Input} from '@angular/core';
import {Application} from "../../models/Application.model";
import {NavHelperService} from "../../services/nav-helper.service";

@Component({
  selector: 'app-app-listing-featured',
  templateUrl: './app-listing-featured.component.html',
  styleUrls: ['./app-listing-featured.component.scss']
})
export class AppListingFeaturedComponent {
  @Input() public apps: Application[] = [];

  constructor(
    private navHelperService: NavHelperService,
  ) {
  }

  public goDetails(app: Application) {
    this.navHelperService.goToApplicationDetails(app._id);
  }

}
