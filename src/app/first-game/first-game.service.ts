import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FirstGameService {
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

  constructor() {
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
    if (this.isDrawn) {
      this.removeFigure(figure)
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
      this.loseGame();
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
    document.getElementById(figure)?.classList.remove('hidden');
    document.getElementById(figure)?.classList.add('active');
    this.isDrawn = true;
  }

  private removeFigure(figure: string): any {
    document.getElementById(figure)?.classList.remove('active');
    document.getElementById(figure)?.classList.add('hidden');
    return this.times.push(Date.now() - this.timer);
  }

  hideAndShowElements(): string {
    return this.start ? 'hidden' : 'visible';
  }

  private winGame() {
    this.gamesPlayed = 0;
    this.start = false;
    this.calculateAverageTime(this.times);
    this.hideAndShowElements()
  }

  private loseGame() {
    clearTimeout(this.timeOut);
    this.gamesPlayed = 0;
    this.start = false;
    this.hideAndShowElements()
    this.times.length = 0;
  }

  calculateAverageTime(times: any[]): void {
    let sum = 0;
    times.forEach((time) => {
      sum += time;
    })
    this.averageTime = Math.floor(sum / times.length);
  }
}

