import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Component
import { AppComponent } from './app.component';

// Service
// import { xxx } from '@service';
import { CSSLoaderService } from './css-loader.service';

// Pipe && Component
// import { xxx } from '@pipeModule';
// import { xxx } from '@comModule';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CSSLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
