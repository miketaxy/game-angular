import {Component, OnInit} from '@angular/core';
import {FirstGameService} from "./first-game.service";

@Component({
  selector: 'app-first-game',
  templateUrl: './first-game.component.html',
  styleUrls: ['./first-game.component.css']
})
export class FirstGameComponent implements OnInit {
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
