import {Component, EventEmitter, OnInit} from '@angular/core';
import {FirstGameService} from "./first-game.service";

@Component({
  selector: 'app-first-game and second-game',
  templateUrl: './first-game.component.html',
  styleUrls: ['./first-game.component.css']
})
export class FirstGameComponent implements OnInit, EventEmitter<boolean> {


  private styleFigure: Map<string, string> = new Map<string, string>([['circle', 'none'], ['square', 'none'], ['triangle', 'none']]);
  private isDrawn: boolean = false;
  private isClicked: boolean = false;
  private start: boolean = false;
  private times = [];


  ngOnInit() {
    document.addEventListener('keypress', (event) => {
      if(!this.start && event.key == ' ') {
        this.game();
      }
      else if(event.key == ' '){
        this.isClicked = true;
      }
    });
  }

  game() {
    let figure;
    let gameCounter = 0;
    while (gameCounter < 5)
      this.setTimer().then(() => {
        figure = this.drawFigure()
      }).then
  }

  drawFigure() {
    let figures = Array.from(this.styleFigure.keys())
    let figure = figures[Math.floor(Math.random() * figures.length)];
    this.styleFigure.set(figure, 'block');
    this.isDrawn = true;
    return figure;
  }

  removeFigure(figure: string) {
    this.styleFigure.set(figure, 'none');
  }


  setTimer($event?: any): Promise<boolean> {
      let randomTime = Math.floor(Math.random() * 3000) + 1000;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, randomTime);
      })
    }

  clickHandler() {

  }
}
