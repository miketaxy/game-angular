import {Component, OnInit} from '@angular/core';
import {animate, AnimationBuilder, state, style} from "@angular/animations";
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
  animation = this.animationBuilder.build([
    state('start', style({marginLeft: '0%'})),
    animate(2000, style({marginLeft: '90%'})),
  ]);

  constructor(thirdGameService: ThirdGameService, protected animationBuilder: AnimationBuilder) {
  }

  ngOnInit(): void {
    document.addEventListener('keypress', () => this.startAnimation());
  }

  startAnimation() {
    let animateTria = this.animation.create(document.querySelector('.triangle-up'));
    if (!this.start) {
      this.start = true;
      this.time = Date.now();
      animateTria.play();
    }
    else{
      animateTria.pause();
      this.resultCalculation();
      setTimeout(() => {
        alert(`Ваш результат: ${this.time} мс`);
        animateTria.reset();
      }, 2000)
    }
  }

  resultCalculation() {
    this.time = 1673 - (Date.now() - this.time);
    this.stop = true;
    console.log(this.time)
  }


}
