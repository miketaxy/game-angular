import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FirstGameComponent} from './first-game/first-game.component';
import {FirstGameService} from "./first-game/first-game.service";
import {SecondGameComponent} from './second-game/second-game.component';
import {SecondGameService} from "./second-game/second-game.service";
import {RouterModule} from "@angular/router";
import {ThirdGameComponent} from './third-game/third-game.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FourthGameComponent } from './fourth-game/fourth-game.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstGameComponent,
    SecondGameComponent,
    ThirdGameComponent,
    FourthGameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'first-game', component: FirstGameComponent},
      {path: 'second-game', component: SecondGameComponent},
      {path: 'third-game', component: ThirdGameComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [FirstGameService, SecondGameService, ThirdGameComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
