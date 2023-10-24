import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstGameComponent } from './first-game/first-game.component';
import {FirstGameService} from "./first-game/first-game.service";
import { SecondGameComponent } from './second-game/second-game.component';
import {SecondGameService} from "./second-game/second-game.service";
import {RouterModule} from "@angular/router";
@NgModule({
  declarations: [
    AppComponent,
    FirstGameComponent,
    SecondGameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'first-game', component: FirstGameComponent},
      {path: 'second-game', component: SecondGameComponent}
    ])
  ],
  providers: [FirstGameService, SecondGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
