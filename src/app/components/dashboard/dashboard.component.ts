import { Component } from "@angular/core";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { Application } from "src/app/models/Application.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {
  public apps: Application[] = [
    {
      name: "Order in the Court",
      link: "https://order-in-the-court-app.herokuapp.com/",
      description: "A free browser-based improv game loosely based off of reality court shows.",
      icon: "fa-gavel",
    },
    {
      name: "User Management",
      link: "https://aoti-user-management-ui.herokuapp.com/",
      description: "User Management for most of my applications.",
      icon: "fa-users",
    },
    {
      name: "Adam in the Parking Lot",
      link: "http://www.adamintheparkinglot.com/",
      description: "Coming soon: website for my band.",
      icon: "fa-music",
    },
    {
      name: "Basic Angular App",
      link: "https://aoti-basic-angular-app.herokuapp.com/",
      description: "A sample Angular App without any style or real use.",
      icon: "fa-laptop",
    },
    {
      name: "Adam on the Internet",
      link: "http://adamontheinternet.com/",
      description: "My main website.",
      icon: "fa-home",
    },
    {
      name: "Callanan Concepts",
      link: "http://callananconcepts.club/",
      description: "Old Version of my main website.",
      icon: "fa-home",
    },
    {
      name: "XPath Assitant",
      link: "https://xpath-assistant.herokuapp.com/",
      description: "A simple app to help building XPath statements.",
      icon: "fa-map-signs",
    },
    {
      name: "Overton Portfolio (Sample Site)",
      link: "https://overton-portfolio-ui.herokuapp.com/",
      description: "A site I started building for a friend's portfolio.",
      icon: "fa-id-badge",
    },
    {
      name: "Armor Equipment (Small Business Site)",
      link: "http://www.armor-equip.com/",
      description: "A small business website I built right out of college.",
      icon: "fa-trash",
    },
  ];

  constructor(
    private navHelper: NavHelperService,
  ) { }

  public goToInfo() {
    this.navHelper.goToInfo();
  }

}
