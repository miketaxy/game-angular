import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondGameService {
  private allFigures = ['circle', 'square', 'triangle'];
  private start: boolean = false;
  private isDrawn: boolean = false;
  private gamesPlayed: number = 0;
  private figure!: string;
  private timeOut!: any;
  private hidden: boolean = false;
  private timer!: any;
  private times: any[] = [];
  private averageTime: number = 0;
  private styleFigure: Map<string, string> = new Map<string, string>([['circle', 'none'], ['square', 'none'], ['triangle', 'none']]);
  constructor() {
  }

  get styleFigureGetter(): Map<string, string> {
    return this.styleFigure;
  }
  get averageTimeGetter(): number {
    return this.averageTime;
  }

  get startGetter(): boolean {
    return this.start;
  }

  get figureGetter(): string {
    return this.figure;
  }

  set startSetter(value: boolean) {
    this.start = value;
  }

  startGame() {
    this.hideAndShowElements();
    this.figure = this.chooseFigure();
    this.setTimer().then(() => this.drawFigure(this.figure))
  }

  clickHandler(figure: string) {
    if (this.isDrawn && figure == 'square') {
      this.removeFigure(figure);
      this.isDrawn = false;
      this.gamesPlayed++;
      //next
      if (this.gamesPlayed < 3) {
        this.startGame();
      }
      //win
      else {
        this.winGame();
      }
      //lose
    } else {
      this.loseGame(figure);
    }
  }

  private chooseFigure(): string {
    const randomIndex = Math.floor(Math.random() * this.allFigures.length);
    return this.allFigures[randomIndex];
  }

  private setTimer(): Promise<boolean> {
    let randomTime = Math.floor(Math.random() * 3000) + 1000;
    return new Promise((resolve) => {
      this.timeOut = setTimeout(() => {
        resolve(true)
        this.timer = Date.now();
      }, randomTime);
    });
  }


  private drawFigure(figure: string): any {
    this.styleFigure.set(figure, 'flex');
    if(figure != 'square') {
      this.timeOut = setTimeout(() => {
        this.removeFigure(figure)
        this.isDrawn = false;
        this.startGame();
      }, 600);
    }
    else {
      this.isDrawn = true;
    }
  }

  private endTimer(): any {
    return this.times.push(Date.now() - this.timer);
  }
  private removeFigure(figure: string): any {
    this.styleFigure.set(figure, 'none');
    if(figure == 'square') {
      this.endTimer();
    }
    else{
      this.timer = 0;
    }
    return
  }

  hideAndShowElements(): string {
    return this.start ? 'hidden' : 'visible';
  }

  private winGame() {
    this.gamesPlayed = 0;
    this.start = false;
    this.calculateAverageTime(this.times);
    this.hideAndShowElements()
    this.times = [];
  }

  private loseGame(figure:string) {
    clearTimeout(this.timeOut);
    this.removeFigure(figure)
    this.gamesPlayed = 0;
    this.start = false;
    this.hideAndShowElements()
    this.times = [];
  }

  calculateAverageTime(times: any[]): void {
    let sum = 0;
    times.forEach((time) => {
      sum += time;
    })
    console.log(this.times.length)
    this.averageTime = Math.floor(sum / times.length);
  }
}
