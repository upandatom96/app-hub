import { Injectable } from "@angular/core";
import { Application } from "../models/Application.model";
import { APPLICATIONS } from "../constants/application.constants";

@Injectable({
  providedIn: "root"
})
export class ApplicationService {
  public get allApps(): Application[] {
    return APPLICATIONS;
  }

  public get featuredApps(): Application[] {
    return this.allApps.filter((app) => {
      return !app.archived;
    });
  }

  public get archivedApps(): Application[] {
    return this.allApps.filter((app) => {
      return app.archived;
    });
  }
}
