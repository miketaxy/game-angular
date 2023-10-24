import {Component, OnInit} from '@angular/core';
import {FirstGameService} from "./first-game.service";

declare var $: any;


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
      if (event.key == ' ' && !this.firstGameService.start) {
        console.log("start game")
        this.firstGameService.start = true;
        this.firstGameService.startGame();
      }
      else if(event.key == ' ' && this.firstGameService.start){
        this.firstGameService.clickHandler()
      }
    });
    //lose game
  //   document.addEventListener('keypress', (event) => {
  //     console.log("lose game")
  //     //   if (event.key == ' ' && this.start && this.isDrawn) {
  //     //     this.start = false;
  //     //     this.removeFigure('circle');
  //     //     this.removeFigure('square');
  //     //     this.removeFigure('triangle');
  //     //   }
  //     // });
  //   });
  }
}
