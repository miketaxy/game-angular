import {Component, OnInit} from '@angular/core';
import {SecondGameService} from "./second-game.service";

@Component({
  selector: 'app-second-game',
  templateUrl: './second-game.component.html',
  styleUrls: ['./second-game.component.css']
})
export class SecondGameComponent implements OnInit{
  constructor(protected secondGameService: SecondGameService) {
  }

  ngOnInit() {
    //start game
    document.addEventListener('keypress', (event) => {
      if (event.key == ' ' && !this.secondGameService.startGetter) {
        this.secondGameService.startSetter = true;
        this.secondGameService.startGame();
      } else if (event.key == ' ' && this.secondGameService.startGetter) {
        this.secondGameService.clickHandler(this.secondGameService.figureGetter);
      }
    });
  }
  get styleFigureGetter(): Map<string, string> {
    return this.secondGameService.styleFigureGetter;
  }
  hideAndShowElements(): string {
    return this.secondGameService.hideAndShowElements();
  }

  calculate() {
    return this.secondGameService.averageTimeGetter;
  }

}
