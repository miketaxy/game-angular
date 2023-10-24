import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstGameService {
  allFigures = ['circle', 'square', 'triangle'];
  start: boolean = false;
  isDrawn: boolean = false;
  gamesPlayed: number = 0;

  constructor() {
  }


  startGame() {
      let figure = this.chooseFigure();
      this.setTimer().then(() => this.drawFigure(figure))
    //     } else {
    //       this.removeFigure(figure)
    //         .then(this.setTimer).then(() => {
    //         figure = this.chooseFigure();
    //         this.drawFigure(figure)
    //       })
    //         .then()
    //         .catch((message) => {
    //           console.log(message + "dawdadawda");
    //           console.log("You lose!")
    //           this.gamesPlayed = 0;
    //           this.start = false;
    //           return;
    //         });
    //     }
    //   }
    // }
  }

  clickHandler(figure:string) {
    if (this.isDrawn && this.start) {
      this.removeFigure(figure)
      this.isDrawn = false;
      this.gamesPlayed++;
      if (this.gamesPlayed < 10) {
        this.startGame();
      }
      else{
        console.log("You win! handler")
        this.gamesPlayed = 0;
        this.start = false;
        return;
      }
    } else {
      console.log("You lose! handler")
      this.gamesPlayed = 0;
      this.start = false;
      return;
    }
  }
//
  private chooseFigure(): string {
    const randomIndex = Math.floor(Math.random() * this.allFigures.length);
    return this.allFigures[randomIndex];
  }
//
  private setTimer(): Promise<boolean> {
    let randomTime = Math.floor(Math.random() * 3000) + 1000;
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), randomTime);
    });
  }

  private drawFigure(figure: string): any {
    document.getElementById(figure)?.classList.remove('figure');
    document.getElementById(figure)?.classList.add('active');
    this.isDrawn = true;
  }

//
  private removeFigure(figure: string): any {
    document.getElementById(figure)?.classList.remove('active');
    document.getElementById(figure)?.classList.add('figure');
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     if (this.isDrawn) {
    //       document.getElementById(figure)?.classList.remove('active');
    //       document.getElementById(figure)?.classList.add('figure');
    //       resolve('next')
    //     } else {
    //       console.log("You lose!");
    //       reject(new Error('You lose!'));
    //     }
    //   }, 1000);

  }
}
