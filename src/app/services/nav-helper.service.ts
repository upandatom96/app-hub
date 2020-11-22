import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ROUTES_ENUM } from "../constants/routing.constants";

@Injectable({
  providedIn: "root"
})
export class NavHelperService {

  constructor(
    private router: Router,
  ) { }

  public goToDashboard(): void {
    this.goToRoute(ROUTES_ENUM.Dashboard);
  }

  public goToTwitter(): void {
    this.goToRoute(ROUTES_ENUM.TwitterFeed);
  }

  public goToInfo(): void {
    this.goToRoute(ROUTES_ENUM.Info);
  }

  public goToDonate(): void {
    this.goToRoute(ROUTES_ENUM.Donate);
  }

  public goToProfile(): void {
    this.goToRoute(ROUTES_ENUM.Profile);
  }

  public goToAdmin(): void {
    this.goToRoute(ROUTES_ENUM.Admin);
  }

  public goToLogin(): void {
    this.goToRoute(ROUTES_ENUM.Login);
  }

  // APPLICATION MANAGEMENT

  public goToApplicationOverview(): void {
    this.goToRoute(ROUTES_ENUM.ApplicationOverview);
  }

  public goToApplicationDetails(appId: string): void {
    this.goToRoutes([ROUTES_ENUM.ApplicationDetails, appId]);
  }

  public goToApplicationCreateForm(): void {
    this.goToRoute(ROUTES_ENUM.ApplicationForm);
  }

  public goToApplicationEditForm(appId: string): void {
    this.goToRoutes([ROUTES_ENUM.ApplicationForm, appId]);
  }

  // GENERAL

  private goToRoute(route: string): void {
    this.goToRoutes([route]);
  }

  private goToRoutes(routes: string[]): void {
    this.router.navigate(routes);
  }
}
