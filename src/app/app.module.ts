import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstGameComponent } from './first-game/first-game.component';
import {FirstGameService} from "./first-game/first-game.service";
import { SecondGameComponent } from './second-game/second-game.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstGameComponent,
    SecondGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FirstGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
