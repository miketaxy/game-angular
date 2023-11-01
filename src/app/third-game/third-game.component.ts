import {Component, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from "@angular/animations";
import {ThirdGameService} from "./third-game.service";

@Component({
  selector: 'app-third-game',
  templateUrl: './third-game.component.html',
  styleUrls: ['./third-game.component.css']
})
export class ThirdGameComponent implements OnInit {
  time!: any;
  stop = false;
  start = false;
  repeatCheck = false;

  animationStart = this.animationBuilder.build([
    animate(2000, style({marginLeft: '90%'})),
  ]);
  animationEnd = this.animationBuilder.build([
    animate(0, style({marginLeft: '0%'}))
  ])

  constructor(thirdGameService: ThirdGameService, protected animationBuilder: AnimationBuilder) {
  }

  ngOnInit(): void {
    document.addEventListener('keypress', () => this.startAnimation());
  }

  startAnimation() {
    let startAnimateTria = this.animationStart.create(document.querySelector('.triangle-up'));
    let endAnimateTria = this.animationEnd.create(document.querySelector('.triangle-up'));
    if (!this.start) {
      this.start = true;
      this.time = Date.now();
      startAnimateTria.play();
    } else if(!this.repeatCheck) {
      this.repeatCheck = true;
      startAnimateTria.pause();
      this.resultCalculation();
      setTimeout(() => {
        alert(`Ваш результат: ${this.time} мс`);
        this.repeatCheck = false;
        this.start = false;
        endAnimateTria.play();
      }, 2000)
    }
  }

  resultCalculation() {
    this.time = 1673 - (Date.now() - this.time);
    this.stop = true;
    console.log(this.time)
  }
}
