import {Component, OnInit} from '@angular/core';
import {FirstGameService} from "../first-game/first-game.service";

@Component({
  selector: 'app-second-game',
  templateUrl: './second-game.component.html',
  styleUrls: ['./second-game.component.css']
})
export class SecondGameComponent implements OnInit{
  constructor(protected firstGameService: FirstGameService) {
  }

  ngOnInit() {
    //start game
    document.addEventListener('keypress', (event) => {
      if (event.key == ' ' && !this.firstGameService.startGetter) {
        this.firstGameService.startSetter = true;
        this.firstGameService.startGame();
      } else if (event.key == ' ' && this.firstGameService.startGetter) {
        this.firstGameService.clickHandler(this.firstGameService.figureGetter);
      }
    });
  }
  get styleFigureGetter(): Map<string, string> {
    return this.firstGameService.styleFigureGetter;
  }
  hideAndShowElements(): string {
    return this.firstGameService.hideAndShowElements();
  }

  calculate() {
    return this.firstGameService.averageTimeGetter;
  }

}
