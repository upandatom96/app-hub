import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { InfoComponent } from "./components/info/info.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { ActuatorReportComponent } from "./components/actuator-report/actuator-report.component";
import { LoginComponent } from "./components/login/login.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AdminComponent } from "./components/admin/admin.component";
import { HeaderComponent } from "./components/header/header.component";
import { BodyComponent } from "./components/body/body.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { CardComponent } from "./components/card/card.component";
import { DonateComponent } from "./components/donate/donate.component";
import { ApplicationDisplayComponent } from "./components/application-display/application-display.component";
import { ApplicationFormComponent } from "./components/application-form/application-form.component";
import { ApplicationOverviewComponent } from "./components/application-overview/application-overview.component";
import { ApplicationTableComponent } from "./components/application-table/application-table.component";
import { AppListingFeaturedComponent } from "./components/app-listing-featured/app-listing-featured.component";
import { AppListingStandardComponent } from "./components/app-listing-standard/app-listing-standard.component";
import { TwitterFeedComponent } from "./components/twitter-feed/twitter-feed.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InfoComponent,
    NavbarComponent,
    FooterComponent,
    ActuatorReportComponent,
    LoginComponent,
    ProfileComponent,
    AdminComponent,
    HeaderComponent,
    BodyComponent,
    LoadingComponent,
    CardComponent,
    DonateComponent,
    ApplicationDisplayComponent,
    ApplicationFormComponent,
    ApplicationOverviewComponent,
    ApplicationTableComponent,
    AppListingFeaturedComponent,
    AppListingStandardComponent,
    TwitterFeedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
