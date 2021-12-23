import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { AutoFocusDirective } from './auto-focus.directive';
import { BetterFocusDirective } from './better-focus.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BasicHighlightDirective, AutoFocusDirective, BetterFocusDirective  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
