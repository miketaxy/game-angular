import {Component, EventEmitter, OnInit} from '@angular/core';
import {FirstGameService} from "./first-game.service";
import {repeat} from "rxjs";

@Component({
  selector: 'app-first-game and second-game',
  templateUrl: './first-game.component.html',
  styleUrls: ['./first-game.component.css']
})
export class FirstGameComponent implements OnInit {
  styleFigure: Map<string, string> = new Map<string, string>([['circle', 'none'], ['square', 'none'], ['triangle', 'none']]);
  private isDrawn: boolean = false;
  private isClicked: boolean = false;
  private start: boolean = false;
  private times: number[] = [];
  private time: number = 0;
  private figure!: string;
  private gamesPlayed: number = 0;
  private timeOut!: any;


  ngOnInit() {
    document.addEventListener('keypress', (event) => {
      if (!this.start && event.key == ' ') {
        this.start = true;
        this.times = [];
        this.game();
      } else if (event.key == ' ' && this.isDrawn && !this.isClicked) {
        this.isClicked = true;
        this.times.push(Date.now() - this.time);
      }
      else{
        this.start = false;
        this.lose();
      }
    });
  }

  game() {
    if(this.start) {
      let gameCounter = 0;
      this.setTimer().then(() => this.drawFigure()).then(() => this.clickHandler()).then(() => this.removeFigure()).catch(() => this.lose());
      gameCounter++;
    }
  }

  drawFigure() {
    let figures = Array.from(this.styleFigure.keys())
    this.figure = figures[Math.floor(Math.random() * figures.length)];
    this.styleFigure.set(this.figure, 'block');
    this.isDrawn = true;
    this.time = Date.now();
  }

  removeFigure() {
    this.styleFigure.set(this.figure, 'none');
    this.gamesPlayed++;
    this.isDrawn = false;
    if(this.gamesPlayed<3){
      this.game();
    }
    else{
      this.end();
    }
  }


  setTimer(): Promise<boolean> {
    let randomTime = Math.floor(Math.random() * 3000) + 1000;
    return new Promise((resolve,reject) => {
      this.timeOut = setTimeout(() => {
        if(this.start)
          resolve(true);
      }, randomTime);
    })
  }

  clickHandler() {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!this.isClicked) {
          reject('Вы проиграли!');
        } else {
          this.isClicked = false;
          resolve(true);
        }
      }, 1000);
    });
  }

  hideAndShowElements(): string {
    return this.start ? 'hidden' : 'visible';
  }

  setFigureToNone(): void{
    this.styleFigure.set('circle', 'none');
    this.styleFigure.set('square', 'none');
    this.styleFigure.set('triangle', 'none');
  }

  end(){
    this.gamesPlayed = 0;
    this.start = false;
    clearTimeout(this.timeOut);
    this.setFigureToNone();
  }
  lose() {
      this.end();
      this.times = [];
  }
  calculateTime(): number {
    let sum = 0;
    for (let i = 0; i < this.times.length; i++) {
      sum += this.times[i];
    }
    return this.times.length == 0 ? 0 : Math.floor(sum / this.times.length);
  }
}
