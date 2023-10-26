import {Injectable} from '@angular/core';
import { style, transition, trigger} from "@angular/animations";

@Injectable({
  providedIn: 'root'
})
export class ThirdGameService {
  private triangles: string[] = ['up', 'down']
  private doAnimation: boolean = false;

  constructor() {
  }

  animation() {
    trigger('move', [
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
      ])
    ])
  }
}
