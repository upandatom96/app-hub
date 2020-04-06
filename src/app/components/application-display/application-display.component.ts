import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';
import { ActivatedRoute } from '@angular/router';
import { BooleanHelper } from 'src/app/utilities/boolean.util';
import { Application } from 'src/app/models/Application.model';

@Component({
  selector: 'app-application-display',
  templateUrl: './application-display.component.html',
  styleUrls: ['./application-display.component.scss']
})
export class ApplicationDisplayComponent implements OnInit {
  public application: Application = null;

  public get ready(): boolean {
    return BooleanHelper.notNull(this.application);
  }

  constructor(
    private applicationService: ApplicationService,
    private route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.loadApp();
  }

  private loadApp(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.applicationService.getSingleApplication(id)
      .subscribe((res) => this.application = res,
        (error) => {
          console.log("get application failed");
        });
  }

}
