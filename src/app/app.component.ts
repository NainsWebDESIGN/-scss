import { Component, OnInit, Inject } from '@angular/core';
import { CSSLoaderService } from './css-loader.service';
// import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  test: boolean = true;
  css: boolean = true;
  constructor(
    public theme: CSSLoaderService,
    // @Inject(DOCUMENT) private document: Document
  ) {
  }
  changeStyle() {
    this.css = !this.css;
    this.theme.switchCSS((this.css) ? "light" : "dark");
  }
  ngOnInit() {
  }
}
