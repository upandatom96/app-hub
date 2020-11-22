import {AfterViewInit, Component, ElementRef, Input, Renderer2} from "@angular/core";

@Component({
  selector: "app-twitter-list-display",
  templateUrl: "./twitter-list-display.component.html",
  styleUrls: ["./twitter-list-display.component.scss"]
})
export class TwitterListDisplayComponent implements AfterViewInit {
  @Input() public author: string = null;
  @Input() public listUrl: string = null;

  public get shouldShow(): boolean {
    return this.author !== null && this.listUrl !== null;
  }

  constructor(
    private renderer2: Renderer2,
    private el: ElementRef
  ) {
  }

  public ngAfterViewInit() {
    const scriptEl = document.createElement("script");
    scriptEl.src = "https://platform.twitter.com/widgets.js";
    this.renderer2.appendChild(this.el.nativeElement, scriptEl);
  }

}
