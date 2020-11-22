import {Component} from "@angular/core";
import {Donation} from "../../models/Donation.model";

@Component({
  selector: "app-donate",
  templateUrl: "./donate.component.html",
  styleUrls: ["./donate.component.scss"]
})
export class DonateComponent {
  public donations: Donation[] = [
    {
      name: "Black Lives Matter",
      details: "Donate (and more) for Black Lives Matter.",
      link: "https://blacklivesmatters.carrd.co/",
    },
    {
      name: "Homeless Black Trans Women Matter",
      details: "Donate to help Homeless Black Trans Women.",
      link: "https://www.gofundme.com/f/homeless-black-trans-women-fund?utm_source=twitter&utm_medium=social&utm_campaign=p_cp+share-sheet",
    },
    {
      name: "Black Hills Legal Fund",
      details: "Support Indigenous People.",
      link: "https://bhlegalfund.org/",
    },
    {
      name: "RAICES",
      details: "Donate to help fight for immigrant and refugee rights.",
      link: "https://www.raicestexas.org/ways-to-give/donate/",
    },
    {
      name: "Peter and Paul Community Services",
      details: "Donate to help the homeless in St. Louis, Missouri.",
      link: "https://ppcsinc.org/give/make-a-donation/",
    },
    {
      name: "Meals on Wheels",
      details: "Donate to help feed America.",
// tslint:disable-next-line
      link: "https://ams.mealsonwheelsamerica.org/eweb/DynamicPage.aspx?WebCode=globaldonate&site=mowa&CampCode=AnnualCampaign&AplCode=AnnCampWeb&_ga=2.86054296.1679140158.1542118140-1937589897.1533304096",
    },
  ];
}
