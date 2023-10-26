import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ThirdGameService} from "./third-game.service";

@Component({
  selector: 'app-third-game',
  templateUrl: './third-game.component.html',
  styleUrls: ['./third-game.component.css'],
  animations: [
    trigger('move', [
      state('start', style({marginLeft: '0%'})),
      state('end', style({marginLeft: '90%'})),
      transition(
        'start => end',
        animate(2000)
      )
    ])]
})
export class ThirdGameComponent implements OnInit {
  state: string = 'end';
  constructor(thirdGameService: ThirdGameService) {
  }

  ngOnInit(): void {
    document.addEventListener('keypress', () => this.startAnimation());
  }

  startAnimation() {
    return this.state = this.state === 'start' ? 'end' : 'start';
  }


}
